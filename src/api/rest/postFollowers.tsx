import restApi, {POST} from "api/API";
import updateRestfulObjectArray, {eUpdateInsertMethod} from "api/hoc/updateRestfulObjectArrays";
import {C6, iUm_Followers} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";
import DigApi from "DigApi";

export default restApi<{ user_id2: number}, iUm_Followers>({
    axios: DropVariables.axios,
    tableName: C6.um_followers.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success = 'You have successfully followed this user'
        request.user_id1 = DigApi.bootstrap.state.id
        request.error = 'Unable to add you as a follower to this user.'
        return request
    },
    responseCallback: (_response, request, _id) => {

        updateRestfulObjectArray<iUser>((prev) => [{
            ID: request.user_id1,
            following: [
                ...(prev.users?.find((user) => user.ID === request.user_id1)?.following || []),
                request.user_id2
            ],
        }, {
            ID: request.user_id2,
            followers: [
                ...(prev.users?.find((user) => user.ID === request.user_id2)?.followers || []),
                request.user_id1
            ]

        }

        ], "ID", "users", eUpdateInsertMethod.FIRST);

    }
});

