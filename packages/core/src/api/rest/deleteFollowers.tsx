import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import {C6, iUm_Followers} from "variables/C6";
import DropVariables from "variables/DropVariables";
import DigApi from "DigApi";
import updateRestfulObjectArray, {eUpdateInsertMethod} from "api/hoc/updateRestfulObjectArrays";
import {iUser} from "variables/sharedInterfaces";

// this does not use the primary key; look at the backend for how
export default restApi<{ user_id2: number }, iUm_Followers, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.um_followers.TABLE_NAME,
    requestMethod: DELETE,
    skipPrimaryCheck: true,
    queryCallback: (request) => {
        request.success = 'You have successfully removed your follower'
        request.error = 'Unable to remove you as a follower of this user.'
        request.user_id1 = DigApi.digApi.state.id
        return request
    },
    responseCallback: (_response, request, _id) => {

        updateRestfulObjectArray<iUser>(previousState => {

            let updateObjects: iUser[] = [];

            const targetUser = previousState.users?.find(user => user.ID === request.user_id2)

            const myAccount = previousState.users?.find(user => user.ID === request.user_id1)

            if (targetUser) {

                targetUser?.followers?.splice(targetUser.followers.indexOf(DigApi.digApi.state.id), 1)

                updateObjects.push(targetUser)

            }

            if (myAccount) {

                myAccount?.following?.splice(myAccount.following.indexOf(request.user_id2), 1)

                updateObjects.push(myAccount)

            }

            return updateObjects
        }, "ID", "users", eUpdateInsertMethod.FIRST)
    }
});

