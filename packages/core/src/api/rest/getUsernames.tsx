import {toast} from "react-toastify";
import restApi, {GET} from "api/API";
import {iUser} from "variables/sharedInterfaces";
import {C6} from "variables/C6";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import DropVariables from "variables/DropVariables";
import DigApi from "DigApi";

export interface iGetUsers {
    usernameSearch: string
}

export default restApi<iGetUsers>({
        axios: DropVariables.axios,
        tableName: C6.users.TABLE_NAME,
        requestMethod: GET,
        queryCallback: (request: iGetUsers = {usernameSearch: ""}) => {

            const bootstrap: DigApi = DigApi.digApi;

            //toast.success("DEVS: User(s) (" + lookUpQueue.join(',') + ") request for remote.", DropVariables.toastOptions);
            //params[C6.WHERE][C6.users.ID] = [C6.NOT_IN, lookUpQueue];

            let params = {
                [C6.SELECT]: [
                    C6.users.ID,
                    C6.users.USER_NICENAME,
                    C6.users.DISPLAY_NAME,
                    C6.users.USER_STATUS,
                ],
                [C6.GROUP_BY]: [
                    C6.users.ID
                ],
                [C6.WHERE]: {},
                [C6.PAGINATION]: {
                    [C6.LIMIT]: 8,
                    [C6.PAGE]: 1
                }
            } as any;

            params[C6.WHERE][C6.users.ID] = [C6.NOT_EQUAL, bootstrap.state.id];
            params[C6.WHERE][0] = [
                [C6.users.DISPLAY_NAME, C6.LIKE, '%' + request.usernameSearch + '%'],
                [C6.users.USER_NICENAME, C6.LIKE, '%' + request.usernameSearch + '%']
            ];

            return params;
        },
        responseCallback: (response) => {

            const restData = response?.data?.rest || [];

            updateRestfulObjectArray<iUser>(restData, "ID", "users")

            if(restData.length === 0){
                toast.warning( 'User not found!', DropVariables.toastOptions);
            }

        }
    });



