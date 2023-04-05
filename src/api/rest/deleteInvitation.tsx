import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import deleteRestfulObjectArrays from "api/hoc/deleteRestfulObjectArrays";
import {C6, iDig_Comp_Invitation, iDig_Comp_Registration, iDig_Team_Roster, iDig_Vendor} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iInvitation} from "variables/sharedInterfaces";

// the only time the frontend should call this is when accepting an invitation in which the invited user is already on the roster and accepted
// team_roster.id = roster_id && team_roster.position = 1
export interface iDeleteInvitation extends iDig_Comp_Invitation {
    invitation_id: number,
    vendor_name: string,
    vendor_id: number,
    vendor_gamertag: string,
    roster_id: number
}

export default restApi<iDeleteInvitation, iDig_Comp_Invitation & iDig_Vendor & iDig_Comp_Registration & iDig_Team_Roster, {}, iDeleteC6RestResponse>(
        {
            axios: DropVariables.axios,
            tableName: [C6.dig_comp_invitation.TABLE_NAME, C6.dig_vendor.TABLE_NAME, C6.dig_comp_registration.TABLE_NAME, C6.dig_team_roster.TABLE_NAME],
            requestMethod: DELETE,
            queryCallback: (request) => {
                request.success = 'Successfully removed the invitation!'
                request.error = 'An unknown issue occurred removing the invitation. We will be looking into this shortly.'
                return request
            },
            responseCallback: (_response, request, id) => {

                if (!id) {
                    return;
                }

                deleteRestfulObjectArrays<iInvitation>([{
                    invitation_id: request.invitation_id
                }], "invitation_id", "invitations")

            }
        });
