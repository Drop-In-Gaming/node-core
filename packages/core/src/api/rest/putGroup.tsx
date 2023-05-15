import restApi, {iPutC6RestResponse, PUT} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {
    C6,
    iDig_Groups,
} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGroups} from "variables/sharedInterfaces";


export default restApi<{}, iDig_Groups, {}, iPutC6RestResponse>({
        axios: DropVariables.axios,
        tableName: C6.dig_groups.TABLE_NAME,
        requestMethod: PUT,
        queryCallback: (request) => {
            request.success = 'Successfully updated the group!'
            request.error = 'An unknown issue occurred updating the group. We will be looking into this shortly.'
            return request
        },
        responseCallback: (_response, request, id) => {
            id && updateRestfulObjectArray<iGroups>([request], "entity_id", "groups")
        }
    });
