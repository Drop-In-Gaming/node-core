import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import deleteRestfulObjectArrays from "api/hoc/deleteRestfulObjectArrays";
import {C6, iDig_Comp_Invitation, iDig_Competitions, iDig_Team_Roster} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iTeam} from "variables/sharedInterfaces";

// Used when denying an invitation or withdrawing from a comp
export interface iDeleteRoster extends iDig_Team_Roster {
    uid: number,
    comp_id?: number,
    invitation_id?: number,
    user_team_id: number
}

export default restApi<iDeleteRoster, iDig_Team_Roster & iDig_Competitions & iDig_Comp_Invitation, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: [C6.dig_team_roster.TABLE_NAME, C6.dig_competitions.TABLE_NAME, C6.dig_comp_invitation.TABLE_NAME],
    requestMethod: DELETE,
    skipPrimaryCheck: true,
    queryCallback: (request) => {
        // success message will depend on args received
        request.success ??= 'Successfully removed roster!'
        request.error ??= 'An unknown issue occurred during your competition registration.'
        return request
    },
    responseCallback: (_response, request, id) => {

        if (!id) {
            return;
        }

        deleteRestfulObjectArrays<iDig_Comp_Invitation>([request], "comp_id", "invitations")

        updateRestfulObjectArray<iTeam>((prev) => {
            const prevTeam = prev.teams?.find(team => team.user_team_id === request.user_team_id);

            const preRosterPending = prevTeam?.rosterPending;
            const preRosterAccepted = prevTeam?.rosterAccepted;

            const index: number|undefined = preRosterPending?.indexOf(request.uid);
            const indexAccepted: number|undefined = preRosterAccepted?.indexOf(request.uid);

            if (index !== undefined && index !== -1) {
                preRosterPending?.splice(index, 1);
            }

            if (indexAccepted !== undefined && indexAccepted !== -1) {
                preRosterAccepted?.splice(indexAccepted, 1);
            }

            return [{
                user_team_id: request.user_team_id,
                rosterAccepted: preRosterAccepted,
                rosterPending: preRosterPending,
                team_roster: prevTeam?.rosterDetails?.filter(roster => roster.id !== id) || []
            }]
        }, 'user_team_id', 'teams');


    }
});

