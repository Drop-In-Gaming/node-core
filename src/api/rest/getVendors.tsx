import restApi, {GET} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Vendor} from "variables/C6";
import DropVariables from "variables/DropVariables";


export default restApi({
            axios: DropVariables.axios,
            tableName: C6.dig_vendor.TABLE_NAME,
            requestMethod: GET,
            queryCallback: (request) => {
                request.success = 'Successfully received vendors!'
                request.error = 'An unknown issue occurred fetching vendors!'
                return request
            },
            responseCallback: (response, _request) => {
                updateRestfulObjectArray<iDig_Vendor>((response?.data?.rest || []), "vendor_id", "vendors")
            }
        }
    )
