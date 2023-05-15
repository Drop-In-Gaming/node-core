import restApi, {POST} from "api/API";
import updateRestfulObjectArray, {eUpdateInsertMethod} from "api/hoc/updateRestfulObjectArrays";
import {C6, iUm_Friends} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";
import DigApi from "DigApi";
import {AxiosResponse} from "axios";



export function updateUserFriendInformation(_response: AxiosResponse, request, _id) {
    updateRestfulObjectArray<iUser>((prev) => [{
        ID: request.user_id1,
        sentFriendRequests: [
            ...(prev.users?.find((user) => user.ID === request.user_id1)?.sentFriendRequests || []),
            request.user_id2
        ],
    },{
        ID: request.user_id2,
        receivedFriendRequests: [
            ...(prev.users?.find((user) => user.ID === request.user_id2)?.receivedFriendRequests || []),
            request.user_id1
        ],
    },
    ], "ID", "users", eUpdateInsertMethod.REPLACE);
}



export default restApi<{ user_id1: number, user_id2: number}, iUm_Friends>({
    axios: DropVariables.axios,
    tableName: C6.um_friends.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success = 'You have successfully sent a friend request to this user'
        request.user_id1 = DigApi.digApi.state.id
        request.error = 'Unable to request this user as a friend.'
        return request
    },
    responseCallback: updateUserFriendInformation

});

