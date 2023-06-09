import {toast} from "react-toastify";
import restApi, {iPostC6RestResponse, POST} from "api/API";

import {
    C6,
    iDig_Parent_User,
    iDig_Temp_Invite,
    iDig_User_Info,
    iDig_User_Organizations,
    iUsermeta,
    iUsers
} from "variables/C6";
import DropVariables from "variables/DropVariables";

export interface iPostUser extends iUsermeta {
    responseCallback?: (id: boolean | string | number) => void
    // sign up page always sends the results of URLSearchParams.get('referenceId') as temp_invite_id (unregistered user invite)
    // Returns null instead of undefined if not found
    temp_invite_id?: number | null
}

export default restApi<iPostUser, iUsers & iDig_Temp_Invite & iDig_Parent_User & iDig_User_Info & iDig_User_Organizations, {}, iPostC6RestResponse<iUsers>>({
    axios: DropVariables.axios,
    tableName: [C6.users.TABLE_NAME, C6.dig_temp_invite.TABLE_NAME, C6.dig_parent_user.TABLE_NAME, C6.dig_user_info.TABLE_NAME, C6.dig_user_organizations.TABLE_NAME, ],
    requestMethod: POST,
    queryCallback: (request) => {
        request.success ??= 'Successfully created your account! You may now log in using your new credentials.'
        request.error = 'An unknown issue occurred while creating your account.'
        return request
    },
    responseCallback: (_response, request, id) => {

        if (typeof id !== 'number') {

            toast.error('An internal error occurred while creating your account. Please contact Drop-In Gaming if problems persist.', DropVariables.toastOptions)

            console.error('An internal error occurred while creating your account. Please contact Drop-In Gaming if problems persist.', _response, request, id)

            return;

        }

        request.responseCallback?.(id)

    }

});
