import restApi, {iPutC6RestResponse, PUT} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import DigApi from "DigApi";
import {C6, iUsermeta} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";

export interface iPutUserMeta extends iUsermeta {
    user_id: number,
    responseCallback?: (id: boolean | string | number) => void
}

export default restApi<iPutUserMeta, iUsermeta, {}, iPutC6RestResponse<iPutUserMeta>>({
        axios: DropVariables.axios,
        tableName: C6.usermeta.TABLE_NAME,
        requestMethod: PUT,
        queryCallback: (request) => {
            request.success = 'Successfully updated user metadata!'
            request.error = 'An unknown issue occurred while updating the user metadata. We will be looking into this shortly.'
            return request
        },
        responseCallback: (response, request, id) => {

            const bootstrap: DigApi = DigApi.bootstrap

            const currentEditUser = bootstrap.state.users?.find(user => user.ID === request.user_id)

            const currentEditUserMeta = currentEditUser?.userMeta || [];

            const updatedMeta: iUsermeta = response?.data?.rest;

            const updatedUserMeta: iUsermeta[] = [
                ...currentEditUserMeta.filter(metaValue => metaValue.meta_key !== request.meta_key),
                updatedMeta
            ];

            id && updateRestfulObjectArray<iUser>([{
                ID: request.user_id,
                userMeta: updatedUserMeta
            }], "ID", "users")

            request.responseCallback?.(id)

        }
    });
