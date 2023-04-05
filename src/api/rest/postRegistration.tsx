import {toast} from "react-toastify";
import restApi, {iPostC6RestResponse, POST, removeInvalidKeys} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import DigApi from "DigApi";
import {
    C6, dig_comp_registration,
    iDig_Comp_Invitation,
    iDig_Comp_Registration,
    iDig_Competitions,
    iDig_Vendor,
} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {eCOMPETITION, iCompetitions} from "variables/sharedInterfaces";
import deleteRestfulObjectArrays from "api/hoc/deleteRestfulObjectArrays";

export interface iPostRegistration extends iDig_Comp_Registration {
    user_id: number,
    competitions_id: number,
    team_id: number,
    vendor_id: number,
    vendor_gamertag: string,
    pin?: number,
    vendor_name: string
}

export default restApi<iPostRegistration, iDig_Comp_Registration & iDig_Competitions & iDig_Vendor, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: [C6.dig_comp_registration.TABLE_NAME, C6.dig_competitions.TABLE_NAME, C6.dig_vendor.TABLE_NAME],
    requestMethod: POST,
    queryCallback: (request) => {
        request.position = 1
        request.success ??= 'Successfully registered to the competition!'
        request.error ??= 'An unknown issue occurred during your competition registration.'
        return request
    },
    responseCallback: (response, request, id) => {

        if ('number' !== typeof id) {
            return;
        }

        request.comp_registration_id = id

        console.log('POST registration response: ', response);
        console.log('POST registration request: ', request);
        console.log('POST registration id: ', id);

        // request has all the infos
        updateRestfulObjectArray<iDig_Comp_Registration>([
            removeInvalidKeys(request, [dig_comp_registration])
        ], "comp_registration_id", "registrations")


        updateRestfulObjectArray<iCompetitions>((prev): iCompetitions[] => {
            let prevComp = prev.competitions?.find(competition => competition.comp_id === request.competitions_id),
                data: iCompetitions[] = [{
                    comp_id: request.competitions_id,
                    registered_users: [
                        ...prevComp?.registered_users || [],
                        request.user_id
                    ]
                }];

            if (undefined === prevComp) {
                toast.error('Could not find the competition to register to. This is unexpected.', DropVariables.toastOptions)
                throw Error('Could not find the competition to register to. This is unexpected.')
            }

            if (prevComp.comp_type_id === eCOMPETITION.MATCHES && prevComp.organizer_id === 1) {

                data[0].organizer_id = DigApi.bootstrap.state.id

            }

            if (prevComp?.team_size === 1) {
                data[0].complete_teams = [
                    ...prevComp?.complete_teams || [],
                    request.team_id
                ]
            } else {
                data[0].incomplete_teams = [
                    ...prevComp?.complete_teams || [],
                    request.team_id
                ]
            }

            return data;
        }, "comp_id", "competitions")

        deleteRestfulObjectArrays<iDig_Comp_Invitation>((previousState): iDig_Comp_Invitation[] => {
            // get the objects to delete only
            return previousState.invitations?.filter(invitation => invitation.user_id === request.user_id) ?? []
        }, "invitation_id", "invitations")


    }
});
