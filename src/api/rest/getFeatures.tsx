import restApi, {GET, iGetC6RestResponse} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Features} from "variables/C6";
import DropVariables from "variables/DropVariables";


export default restApi<{}, iDig_Features, {}, iGetC6RestResponse<iDig_Features>>({
            axios: DropVariables.axios,
            tableName: C6.dig_features.TABLE_NAME,
            requestMethod: GET,
            queryCallback: (request) => {
                request.success = 'Successfully received features!'
                request.error = 'An unknown issue occurred fetching features!'
                return request
            },
            responseCallback: (response, _request) => {
                updateRestfulObjectArray<iDig_Features>((response?.data?.rest || []), "feature_entity_id", "features")
            }
        }
    )
