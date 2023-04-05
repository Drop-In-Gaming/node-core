import restApi, {PUT} from "api/API";
import DigApi from "DigApi";
import {C6, iUm_Friends} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {AxiosResponse} from "axios";
import updateRestfulObjectArray, {eUpdateInsertMethod} from "../hoc/updateRestfulObjectArrays";
import {iUser} from "variables/sharedInterfaces";
import {updateUserFriendInformation} from "./postFriends";


export function approveFriendRequest(_response: AxiosResponse, request, _id: boolean | string) {
    updateRestfulObjectArray<iUser>(prev => {

        let updateUsers : iUser[] = []

        const targetUser = prev.users?.find(user => user.ID === request.user_id2)

        const myAccount = prev.users?.find(user => user.ID === request.user_id1)

        if (undefined !== targetUser) {

            targetUser.receivedFriendRequests?.splice(targetUser.receivedFriendRequests.indexOf(request.myAccount), 1)

            targetUser.friends?.push(targetUser.friends.indexOf(request.myAccount))

            updateUsers.push(targetUser)

        }

        if (undefined !== myAccount) {

            myAccount.sentFriendRequests?.splice(myAccount.sentFriendRequests.indexOf(request.targetUser), 1)

            myAccount.friends?.push(myAccount.friends.indexOf(request.targetUser))

            updateUsers.push(myAccount)

        }

        return updateUsers

    }, "ID", "users", eUpdateInsertMethod.FIRST)

}



export default restApi<{ user_id1: number, user_id2: number}, iUm_Friends>({
    axios: DropVariables.axios,
    tableName: C6.um_friends.TABLE_NAME,
    requestMethod: PUT,
    skipPrimaryCheck: true,
    queryCallback: (request) => {
        request.success = 'Successfully accepted friend request!'
        request.error = 'Unable to accept friend request. Please try again later.'
        request.user_id1 = DigApi.bootstrap.state.id
        return request
    },
    responseCallback: updateUserFriendInformation
});
