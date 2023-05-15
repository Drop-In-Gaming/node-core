import restApi, {GET} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iUsermeta} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";

export interface iGetUserMeta {
    user: iUser
}

export default restApi<iGetUserMeta, iUsermeta>({
        axios: DropVariables.axios,
        tableName: C6.usermeta.TABLE_NAME,
        requestMethod: GET,
        queryCallback: (request) => {

            updateRestfulObjectArray<iUser>([{
                ID: request.user.ID,
                userMeta: null
            }], "ID", "users")

            return {
                [C6.WHERE]: {
                    [C6.usermeta.USER_ID]: request.user.ID,
                },
                [C6.PAGINATION]: {
                    [C6.LIMIT]: 1000
                }
            }

        },
        responseCallback: (response, request) => updateRestfulObjectArray<iUser>([{
            ID: request.user.ID,
            userMeta: (response?.data?.rest || [])
        }], "ID", "users")
    })
