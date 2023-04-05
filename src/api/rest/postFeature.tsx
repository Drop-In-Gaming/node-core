import restApi, {iPostC6RestResponse, POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
//import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Features} from "variables/C6";
import DropVariables from "variables/DropVariables";

export default restApi<{}, iDig_Features, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_features.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success ??= 'Feature created!'
        request.error ??= 'There was an issue creating this feature. Please try again.'
        return request;
    },
    responseCallback: (_response, request, id) => {

        if ('string' !== typeof id) {
            return;
        }

        updateRestfulObjectArray<iDig_Features>([
            {
                ...request,
                feature_entity_id: parseInt(id),
            }
        ], "feature_entity_id", "features")

    }
});

