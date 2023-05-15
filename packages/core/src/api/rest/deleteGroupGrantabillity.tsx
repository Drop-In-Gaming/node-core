import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Group_References} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups} from "variables/sharedInterfaces";

export default restApi<{
    group_id: number,
    allowed_to_grant_group_id: number,
}, iDig_Group_References, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_group_references.TABLE_NAME,
    requestMethod: DELETE,
    queryCallback: (request) => {
        request.success = 'Successfully deleted the groups ability to grant another group.'
        request.error = 'Failed to remove the groups ability to grant another group. Please try again later.'
        return request
    },
    responseCallback: (_response, request, id) => {

        id && updateRestfulObjectArray<iGroups>((previousState) => {

            const fullGroup: iGroups | undefined = previousState.groups?.find((group: iGroups) => group.entity_id === request.group_id);

            const index : number|undefined = fullGroup?.allowed_to_grant_group_id?.indexOf(request?.allowed_to_grant_group_id ?? '');

            if (index && index > -1) { // only splice array when item is found
                fullGroup?.feature_code?.splice(index, 1); // 2nd parameter means remove one item only
            }

            return fullGroup ? [fullGroup] : [];

        }, "entity_id", "groups")

    }
});


