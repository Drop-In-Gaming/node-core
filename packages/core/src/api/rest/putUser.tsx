import restApi, {iPutC6RestResponse, PUT, removeInvalidKeys} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iUsers, users} from "variables/C6";
import DropVariables from "variables/DropVariables";


export default restApi<{ ID: number }, iUsers,{}, iPutC6RestResponse<iUsers>>({
    axios: DropVariables.axios,
    tableName: C6.users.TABLE_NAME,
    requestMethod: PUT,
    queryCallback: (request) => {
        request.success = 'Successfully updated user information!'
        request.error = 'An error occurred while updating user information!'
        return request
    },
    responseCallback: (response, request) => {

        console.log('response from', response)

        if (undefined !== request.user_pass) {

            return;

        }

        updateRestfulObjectArray<iUsers>([removeInvalidKeys(request, [users])], "ID", "users");

    }

});
