import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_User_Groups} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups, iUser} from "variables/sharedInterfaces";

export default restApi<{
    userId: number,
    groupId: number
}, iDig_User_Groups, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_user_groups.TABLE_NAME,
    requestMethod: DELETE,
    queryCallback: (request) => {
        request.success = 'Successfully deleted the group from the user.'
        request.error = 'Failed to remove the group from the user. Please try again later.'
        return {
            [C6.WHERE]: {
                [C6.dig_user_groups.GROUP_ID]: request.userId,
                [C6.dig_user_groups.USER_ID]: request.groupId,
            }
        }
    },
    responseCallback: (_response, request, id) => {

        id && updateRestfulObjectArray<iUser>((previousState) => {

            const fullGroup: iGroups | undefined = previousState.groups?.find((group: iGroups) => group.entity_id === request.groupId);

            const fullUser: iUser | undefined = previousState.users?.find((user: iUser) => user.ID === request.userId);

            const index : number|undefined = fullUser?.group_name?.indexOf(fullGroup?.group_name ?? '');

            if (index && index > -1) { // only splice array when item is found
                fullUser?.group_name?.splice(index, 1); // 2nd parameter means remove one item only
            }

            return fullUser ? [fullUser] : [];

        }, "ID", "users")

    }
});


