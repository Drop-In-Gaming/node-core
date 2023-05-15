import restApi, {iPostC6RestResponse, POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iUsermeta} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";

export interface iPostUserMeta extends iUsermeta {
    user_id: number,
    responseCallback?: (id: string|boolean|number) => void
}

export default restApi<iPostUserMeta, iUsermeta, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.usermeta.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success = 'Successfully added your metadata information!'
        request.error = 'An unknown issue occurred adding the metadata.'
        return request
    },
    responseCallback: (_response, request, id) => {

        if ('number' === typeof id) {

            updateRestfulObjectArray<iUser>(oldState => [{
                ID: request.user_id,
                userMeta: [
                    ...(oldState.users?.find(user=>user.ID === request.user_id)?.userMeta || []),
                    {
                        umeta_id: id,
                        meta_value: request.meta_value,
                        meta_key: request.meta_key
                    }
                ]
            }], "ID", "users")
        }

        request.responseCallback?.(id)

    }
});
