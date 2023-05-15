import restApi, {POST} from "api/API";
import {C6, iDig_Competitions, iDig_Team_Roster} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iTeam} from "variables/sharedInterfaces";

// Used when sending an invite for your team, or for a comp in cases where the user is not yet on the roster
// uid = receiving user id
export interface iPostRoster extends iDig_Team_Roster {
    comp_id?: number,
    uid: number,
    user_team_id: number
}
export default restApi<iPostRoster, iDig_Team_Roster & iDig_Competitions>({
        axios: DropVariables.axios,
        tableName: [C6.dig_team_roster.TABLE_NAME, C6.dig_competitions.TABLE_NAME],
        requestMethod: POST,
        queryCallback: (request) => {
            request.success ??= 'Successfully add to the team!'
            request.error ??= 'An unknown issue occurred during your team roster addition. Please try again!'
            return request
        },
        responseCallback: (response, request, id) => {

            if (!id) {
                return;
            }

            console.log('Post team roster',response);
            console.log('Post team roster',request);

            updateRestfulObjectArray<iTeam>((prev) => {
                let prevTeam = prev.teams?.find(team => team.user_team_id === request.user_team_id)
                return [{
                    user_team_id: request.user_team_id,
                    team_roster: [
                        ...prevTeam?.rosterDetails || [],
                        {
                            id: id,
                            uid: request.uid,
                            user_team_id: request.user_team_id,
                            position: 0,
                            acceptance: 0
                        }
                    ],
                    rosterPending: [
                        ...prevTeam?.rosterPending || [],
                        request.uid
                    ]
                }]
            }, 'user_team_id', 'teams');

        }
    });
