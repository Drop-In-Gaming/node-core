import restApi, {iPostC6RestResponse, POST} from "api/API";
import updateRestfulObjectArray, {eUpdateInsertMethod} from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Chat_Global_Messages} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iChatMessages} from "variables/sharedInterfaces";

export default restApi<{}, iDig_Chat_Global_Messages, {}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: C6.dig_chat_global_messages.TABLE_NAME,
    requestMethod: POST,
    queryCallback: (request) => {
        request.success = 'Global message sent!'
        request.error = 'An unknown issue occurred while sending your message. We will be looking into this shortly.'
        return request
    },
    responseCallback: (_response, request, id) => {

        'string' === typeof id && updateRestfulObjectArray<iChatMessages>([{
            ...request,
            global_message_id: id,
        }], "global_message_id", "globalMessages", eUpdateInsertMethod.FIRST);

    }
});

