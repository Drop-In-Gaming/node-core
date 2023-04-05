import restApi, {PUT} from "api/API";
import {C6, iDig_Comp_Invitation, iDig_Comp_Registration, iDig_Team_Roster, iDig_Vendor} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iTeam} from "variables/sharedInterfaces";

// Only used to accept an invitation for a team they have not accepted before (roster entry exists, acceptance = 0)
export interface iPutTeamRoster extends iDig_Team_Roster {
    id: number,
    invitation_id: number,
    vendor_id?: number,
    vendor_name?: string,
    vendor_gamertag?: string
}

export default restApi<iPutTeamRoster, iDig_Team_Roster & iDig_Comp_Invitation & iDig_Vendor & iDig_Comp_Registration>({
        axios: DropVariables.axios,
        tableName: [C6.dig_team_roster.TABLE_NAME, C6.dig_comp_invitation.TABLE_NAME, C6.dig_vendor.TABLE_NAME, C6.dig_comp_registration.TABLE_NAME],
        requestMethod: PUT,
        queryCallback: (request) => {
            request.success = 'Successfully accepted the invite!'
            request.error = 'An unknown issue occurred. We will be looking into this shortly.'
            return request
        },
        responseCallback: (response) => {
            console.log(response);
            let restData = (response?.data?.rest || []);

            restData.map(entry => {
                updateRestfulObjectArray<iTeam>((prev) => {
                    let prevTeamRosters = prev?.teams?.find(team => team.user_team_id === entry.user_team_id)?.rosterDetails || [],
                        rosterIndex = prevTeamRosters?.findIndex(roster => roster.id === entry.id) || 0;

                    // should exist already, but add it back if it doesn't
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
    });
