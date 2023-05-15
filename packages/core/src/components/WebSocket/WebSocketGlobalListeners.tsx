import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {dig_chat_global_messages} from "variables/C6";
import {iChatMessages} from "variables/sharedInterfaces";

type iReactToParedWebsocketEvent = (event: any) => void;

export default function (event: any) {
    ([
        // REGISTERED WEBSOCKET EVENT LISTENER
        (event) => dig_chat_global_messages.COLUMNS[dig_chat_global_messages.GLOBAL_MESSAGE] in event
            && updateRestfulObjectArray<iChatMessages>(event, "global_message_id", "globalMessages"),






    ] as iReactToParedWebsocketEvent[]).forEach((reactToParedWebsocketEvent) => {
        try {
            reactToParedWebsocketEvent(event)
        } catch (e) {
            console.error(e);
        }
    });
}
