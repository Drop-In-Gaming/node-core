import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import deleteRestfulObjectArrays from "api/hoc/deleteRestfulObjectArrays";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iRegistrations} from "DigApi";
import {dig_comp_registration, iDig_Comp_Registration} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iCompetitions} from "variables/sharedInterfaces";


export interface iDeleteRegistration extends iDig_Comp_Registration {
    competitions_id: number,
    team_id: number,
    user_id: number
}

export default restApi<iDeleteRegistration, iDig_Comp_Registration, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: dig_comp_registration.TABLE_NAME,
    requestMethod: DELETE,
    skipPrimaryCheck: true,
    queryCallback: (request) => {
        request.success = 'Successfully unregistered!'
        request.error = 'An unknown issue occurred removing the registration information. If issues persist, please contact Drop-In Gaming!'
        return request
    },
    responseCallback: (_response, request, id) => {

        if (!id) {

            return;

        }

        deleteRestfulObjectArrays<iRegistrations>(prev => {

            return prev.registrations?.filter(registration => registration.competitions_id === request.competitions_id
                && registration.team_id === request.team_id) ?? []

        }, "comp_registration_id", "registrations")


        updateRestfulObjectArray<iCompetitions>((prev) => {

            const prevComp = prev.competitions?.find(competition => competition.comp_id === request.competitions_id)

            const team = prev.teams?.find(team => team.user_team_id === request.team_id)

            return [{
                comp_id: request.competitions_id,
                complete_teams: prevComp?.complete_teams?.filter(team => team !== request.team_id) ?? [],
                incomplete_teams: prevComp?.incomplete_teams?.filter(team => team !== request.team_id) ?? [],
                registered_users: prevComp?.registered_users?.filter(user => false === team?.rosterAccepted?.includes(user)) ?? [],  // todo - delete others registrations
            }]
        }, "comp_id", "competitions")


    }
});

