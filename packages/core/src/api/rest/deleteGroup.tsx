import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import deleteRestfulObjectArrays from "api/hoc/deleteRestfulObjectArrays";
import {C6, iDig_Groups} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups} from "variables/sharedInterfaces";

export default restApi<{
    entity_id: number;
}, iDig_Groups, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_groups.TABLE_NAME,
    requestMethod: DELETE,
    queryCallback: (request) => {
        request.success = 'Successfully deleted the group.'
        request.error = 'Failed to remove the group. Please try again later.'
        return request
    },
    responseCallback: (_response, request, id) => {

        id && deleteRestfulObjectArrays<iGroups>([request], "entity_id", "groups")


    }
});


