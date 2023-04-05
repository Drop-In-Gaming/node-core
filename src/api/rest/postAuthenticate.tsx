import restApi, {ModifyDeep, POST} from "api/API";
import login from "api/hoc/login";
import { toast } from 'react-toastify';
import {C6} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";

export interface iAuthenticateUser {
    user: ModifyDeep<iUser, { ID?: number }>,
}

// noinspection JSIgnoredPromiseFromCall
export default restApi<iAuthenticateUser, iUser>({
        axios: DropVariables.axios,
        tableName:C6.users.TABLE_NAME,
        requestMethod:POST,
        queryCallback:(request) => {

            request.success = 'Successfully signed on!';

            request.error = 'An unknown issue occurred authenticating your account. Please try again.';

            request.cacheResults = false;

            return request.user

        },
        responseCallback: response => {

            if (response?.data?.rest?.success &&
                response?.data?.rest?.user?.ID) {

                login(response?.data?.rest?.user?.ID)

            } else {

                // noinspection JSIgnoredPromiseFromCall
                toast.error("Login Failed! Please make sure your username and password is correct.")

            }

        }});