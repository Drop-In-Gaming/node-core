import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import {C6, iUm_Friends} from "variables/C6";
import DropVariables from "variables/DropVariables";
import DigApi from "DigApi";
import updateRestfulObjectArray, {eUpdateInsertMethod} from "../hoc/updateRestfulObjectArrays";
import {iUser} from "variables/sharedInterfaces";

export default restApi<{ user_id2: number, user_id1: number }, iUm_Friends, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.um_friends.TABLE_NAME,
    requestMethod: DELETE,
    skipPrimaryCheck: true,
    queryCallback: (request) => {
        request.success = 'You have successfully removed this user as a friend'
        request.user_id1 = DigApi.bootstrap.state.id
        request.error = 'Unable to remove the user as a friend. Please try again later.'
        return request
    },
    responseCallback: (_response, request, _id) => {
        updateRestfulObjectArray<iUser>(prev => {

            let updateObjects: iUser[] = [];

            const targetUser = prev.users?.find(user => user.ID === request.user_id2)

            const myAccount = prev.users?.find(user => user.ID === request.user_id1)

            if (myAccount) {

                myAccount?.friends?.splice(myAccount.friends.indexOf(request.user_id2), 1)

                updateObjects.push(myAccount)

            }

            if (targetUser) {

                targetUser?.friends?.splice(targetUser.friends.indexOf(request.user_id1), 1)

                updateObjects.push(targetUser)

            }

            return updateObjects

        }, "ID", "users", eUpdateInsertMethod.FIRST)
    }
});