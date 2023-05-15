import restApi, {GET, iGetC6RestResponse} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iUm_Metadata} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";

export interface iGetUmMeta {
    user: iUser
}

export default restApi<iGetUmMeta, iUm_Metadata, {}, iGetC6RestResponse<iUm_Metadata>>({
        axios: DropVariables.axios,
        tableName: C6.um_metadata.TABLE_NAME,
        requestMethod: GET,
        queryCallback: (request) => {

            // so we don't try to fetch this use in a differently formatted query, ie from another component
            updateRestfulObjectArray<iUser>(oldState => [{
                ID: request.user.ID,
                umMeta: oldState.users?.find(user => user.ID === request.user.ID)?.umMeta || undefined
            }], "ID", "users")

            return {
                [C6.WHERE]: {
                    [C6.um_metadata.USER_ID]: request.user.ID,
                },
                [C6.PAGINATION]: {
                    [C6.LIMIT]: 1000
                }
            }

        },
        responseCallback: (response, request) => {

            const roles = Object.keys(response?.data?.rest?.find((meta: iUm_Metadata) => "wp_zesv6j_capabilities" === meta.um_key)?.um_value || {});

            updateRestfulObjectArray<iUser>([{
                ID: request.user.ID,
                umMeta: (response?.data?.rest || []),
                roles: roles,
                user_is_admin: roles.includes('administrator') || roles.includes('author') || roles.includes('editor')
            }], "ID", "users")

        }
    });

