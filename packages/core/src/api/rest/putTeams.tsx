import restApi, {PUT} from "api/API";
import {C6 ,iDig_User_Team} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "../hoc/updateRestfulObjectArrays";

export default restApi<{},iDig_User_Team, {}, iDig_User_Team>({
    axios: DropVariables.axios,
    tableName: C6.dig_user_team.TABLE_NAME,
    requestMethod: PUT,
    queryCallback: (request) => {
        request.success = 'Successfully updated team info!'
        request.error = 'An error occurred while updating team info!'
        return request
    },
    responseCallback: (response, request) => {
        console.log(response)

        let data = {
            user_team_id: request.user_team_id
        }

        if(request.team_name){
            Object.assign(data, {
                team_name: request.team_name
            });
        }

        if(request.hide){
            Object.assign(data, {
                hide: request.hide
            });
        }

        updateRestfulObjectArray<iDig_User_Team>([data], "user_team_id", "teams");
    }
});
