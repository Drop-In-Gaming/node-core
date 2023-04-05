import restApi, {GET, iGetC6RestResponse} from "api/API";
import DigApi from "DigApi";
import {
    C6,
    dig_chat_advertisements,
    dig_chat_global_messages,
    iDig_Chat_Global_Messages,
    um_metadata,
    users
} from "variables/C6";
import DropVariables from "variables/DropVariables";


export default restApi<{}, iDig_Chat_Global_Messages, {}, iGetC6RestResponse<iDig_Chat_Global_Messages>>({
    axios: DropVariables.axios,
    tableName: C6.dig_chat_global_messages.TABLE_NAME,
    requestMethod: GET,
    queryCallback: {
        [C6.SELECT]: [
            dig_chat_global_messages.GLOBAL_MESSAGE_ID,
            dig_chat_global_messages.GLOBAL_MESSAGE_FROM_USER,
            dig_chat_global_messages.GLOBAL_MESSAGE,
            dig_chat_global_messages.GLOBAL_MESSAGE_DATETIME,
            dig_chat_global_messages.GLOBAL_MESSAGE_ADVERTISEMENT,
            dig_chat_advertisements.ADVERTISEMENT_ACTIVE,
            dig_chat_advertisements.LAST_SHOWN_AT,
            [um_metadata.UM_VALUE, C6.AS, 'profile_photo'],
            users.DISPLAY_NAME,
            users.USER_NICENAME
        ],
        [C6.JOIN]: {
            [C6.INNER]: {
                [users.TABLE_NAME]: {
                    [dig_chat_global_messages.GLOBAL_MESSAGE_FROM_USER]: users.ID
                }
            },
            [C6.LEFT_OUTER]: {
                [um_metadata.TABLE_NAME]: {
                    [um_metadata.USER_ID]: users.ID,
                    [um_metadata.UM_KEY]: 'profile_photo',
                },
                [dig_chat_advertisements.TABLE_NAME]: {
                    [dig_chat_advertisements.ADVERTISEMENT_ID]: dig_chat_global_messages.GLOBAL_MESSAGE_ADVERTISEMENT
                }
            }
        },
        [C6.GROUP_BY]: [
            dig_chat_global_messages.GLOBAL_MESSAGE_ID,
            um_metadata.UM_VALUE
        ],
        [C6.PAGINATION]: {
            [C6.ORDER]: {
                [dig_chat_global_messages.GLOBAL_MESSAGE_DATETIME]: C6.DESC
            },
            [C6.PAGE]: 1,
            [C6.LIMIT]: 100
        },
    },
    responseCallback: response => {

        const restData = response?.data?.rest || [];

        DigApi.digApi.setState((previousState) => ({
            globalMessages: [...previousState.globalMessages || [], ...restData],
        }));


    }
})

