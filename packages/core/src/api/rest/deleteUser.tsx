import {toast} from "react-toastify";
import restApi, {DELETE} from "api/API";
import deleteRestfulObjectArrays from "api/hoc/deleteRestfulObjectArrays";
import DigApi from "DigApi";
import {C6, iUsers} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";
import logout from "../hoc/logout";

export default restApi<{
    ID: number
}, iUsers>({
    axios: DropVariables.axios,
    tableName: C6.users.TABLE_NAME,
    requestMethod: DELETE,
    queryCallback: (request) => {
        request.success ??= 'We\'ve successfully removed the account from our records!'
        request.error ??= 'An unknown issue occurred removing the account.'
        return request
    },
    responseCallback: (_response, request, id) => {

        const bootstrap: DigApi = DigApi.digApi;

        if (id) {

            if (request.ID === bootstrap.state.id) {

                logout(true).then(() => {
                    // todo - verify this is working
                    toast.success('All session cookies has been removed from your browser.')
                })

            }

            deleteRestfulObjectArrays<iUser>([{ID: request.ID}], 'ID', 'users')

        }

    }
});


