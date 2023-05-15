import {C6, iDig_Team_Roster} from "variables/C6";
import restApi, {GET} from "api/API";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iTeam} from "variables/sharedInterfaces";


export default restApi<{user_team_ids: number[]}, iDig_Team_Roster>({
    axios: DropVariables.axios,
    tableName: C6.dig_team_roster.TABLE_NAME,
    requestMethod: GET,
    queryCallback: (request) => {
        request.user_team_ids.map(team_id => {
            updateRestfulObjectArray<iTeam>([{
                user_team_id: team_id,
                rosterDetails: []
            }], "user_team_id", "teams");
        });

        // seems redundant, but shit will yell at you for sending a request using IN with only one value
        let where = request.user_team_ids.length === 1 ? request.user_team_ids[0] : [C6.IN, request.user_team_ids];

        return {
            [C6.SELECT]: [
                C6.dig_team_roster.ID,
                C6.dig_team_roster.UID,
                C6.dig_team_roster.USER_TEAM_ID,
                C6.dig_team_roster.POSITION,
                C6.dig_team_roster.ACCEPTANCE
            ],
            [C6.WHERE]: {
                [C6.dig_team_roster.USER_TEAM_ID]: where
            }
        };
    },
    responseCallback: (response) => {
        let restData = (response?.data?.rest || []);

        restData.map(entry => {
            updateRestfulObjectArray<iTeam>((prev) => {
                let prevTeamRosters = prev.teams?.find(team => team.user_team_id === entry.user_team_id)?.rosterDetails || [],
                    rosterIndex = prevTeamRosters?.findIndex(roster => roster.id === entry.id) || 0;

                // insert or update
                if (rosterIndex === -1) {
                    prevTeamRosters.push(entry);
                } else {
                    prevTeamRosters[rosterIndex] = entry;
                }

                return [{
                    user_team_id: entry.user_team_id,
                    rosterDetails: prevTeamRosters
                }]
            }, "user_team_id", "teams");
        });

    }
})