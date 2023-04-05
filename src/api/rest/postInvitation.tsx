import restApi, {POST, removeInvalidKeys} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, dig_comp_invitation, iDig_Comp_Invitation} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iInvitation} from "variables/sharedInterfaces";
import getInvitations from "./getInvitations";

export default restApi<{},iDig_Comp_Invitation, {}>({
        axios: DropVariables.axios,
        tableName: C6.dig_comp_invitation.TABLE_NAME,
        requestMethod: POST,
        queryCallback: (request) => {
            request.success = 'Invitation(s) Sent!'
            request.error = 'An unknown issue occurred while sending your invitation. We will be looking into this shortly.'
            return request
        },
        responseCallback: (_response, request, id) => {

            if ('number' !== typeof id) {

                return;

            }

            if (undefined !== request.dataInsertMultipleRows) {

                request.dataInsertMultipleRows[0].invitation_id = id;

                updateRestfulObjectArray<iDig_Comp_Invitation>(request.dataInsertMultipleRows, "invitation_id", "invitations")

                getInvitations()

            } else {

                updateRestfulObjectArray<iInvitation>([{
                    ...removeInvalidKeys(request, [dig_comp_invitation]),
                    invitation_id: id,
                }], "invitation_id", "invitations")

            }

        }
    });

