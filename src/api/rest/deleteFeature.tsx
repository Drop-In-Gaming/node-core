import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import deleteRestfulObjectArrays from "api/hoc/deleteRestfulObjectArrays";
import {C6, iDig_Features} from "variables/C6";
import DropVariables from "variables/DropVariables";

export default restApi<{
    feature_entity_id: number;
}, iDig_Features, {}, iDeleteC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_features.TABLE_NAME,
    requestMethod: DELETE,
    queryCallback: (request) => {
        request.success = 'Successfully deleted the feature.'
        request.error = 'Failed to remove the feature. Please try again later.'
        return request
    },
    responseCallback: (_response, request, id) => {

        id && deleteRestfulObjectArrays<iDig_Features>([request], "feature_entity_id", "features")

    }
});


