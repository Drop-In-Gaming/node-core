import restApi, {POST} from "api/API";
//import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_User_Team} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray, {eUpdateInsertMethod} from "../hoc/updateRestfulObjectArrays";
import {iTeam} from "variables/sharedInterfaces";
import DigApi from "DigApi";

export default restApi<{
     handleSuccess?: () => void,
}, iDig_User_Team>({
    axios: DropVariables.axios,
    tableName: C6.dig_user_team.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success ??= 'Team created successfully!'
        request.error ??= 'There was an issue creating this team. Please try again.'
        return request;
    },
    responseCallback: (_response, request, id) => {



        if ('number' !== typeof id) {
            return;
        }

        updateRestfulObjectArray<iTeam>([{
                ...request,
                rosterAccepted: [
                    DigApi.digApi.state.id
                ],
                rosterDetails: [
                ],
                user_team_id: id,
                created: new Date().toISOString(),
            }],
            "user_team_id",
            "teams",
            eUpdateInsertMethod.FIRST,
            () => request.handleSuccess?.())


    }
});

