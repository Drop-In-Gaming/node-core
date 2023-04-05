import restApi, {iPostC6RestResponse, POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_User_Groups, iUsermeta} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups, iUser} from "variables/sharedInterfaces";

export interface iPutUserMeta extends iUsermeta {
    group_id: number;
    user_id: number;
}

export default restApi<{}, iDig_User_Groups, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_user_groups.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success = 'Successfully updated user group association.'
        request.error = 'An unknown issue occurred adding the group to the user. We will be looking into this shortly.'
        return request
    },
    responseCallback: (_response, request, id) => {

        id && updateRestfulObjectArray<iUser>(previousState => {

            const fullGroup: iGroups | undefined = previousState.groups?.find((group: iGroups) => group.entity_id === request.group_id);

            const currentEditUser = previousState.users?.find(user => user.ID === request.user_id)

            fullGroup?.group_name && currentEditUser?.group_name?.push(fullGroup?.group_name);

            return currentEditUser ? [currentEditUser] : []

        }, "ID", "users")

    }
});
