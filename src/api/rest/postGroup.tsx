import restApi, {iPostC6RestResponse, POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import DigApi from "DigApi";
//import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Groups} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups} from "variables/sharedInterfaces";

export default restApi<{}, iDig_Groups, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_groups.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success ??= 'We\'ve successfully created your new group.'
        request.error ??= 'There was an issue creating this group. Please try again.'
        request.created_by = DigApi.digApi.state.id;
        return request;
    },
    responseCallback: (_response, request, id) => {

        'number' === typeof id && updateRestfulObjectArray<iGroups>([
            {
                ...request,
                entity_id: id,
            }
        ], "entity_id", "groups")

    }
});

