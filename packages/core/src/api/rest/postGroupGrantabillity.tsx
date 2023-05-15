import restApi, {iPostC6RestResponse, POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
//import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Group_References} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups} from "variables/sharedInterfaces";

export default restApi<{
    group_id: number,
    allowed_to_grant_group_id: number
}, iDig_Group_References, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_group_references.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success ??= 'Group can now grant access to group!'
        request.error ??= 'There was an issue creating this team. Please try again.'
        return request;
    },
    responseCallback: (_response, request, id) => {

        if ('string' !== typeof id) {
            return;
        }

        updateRestfulObjectArray<iGroups>(previousState => {

            const lastGroup = previousState.groups?.find(group => {

                if (group.group_id !== request.group_id) {
                    return group;
                }

                group.allowed_to_grant_group_id?.push(request.allowed_to_grant_group_id);

            })

            return lastGroup ? [lastGroup] : []

        }, "entity_id", "groups")

    }

});