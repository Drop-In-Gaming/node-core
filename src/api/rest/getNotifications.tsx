import restApi, {GET} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import DigApi from "DigApi";
import {C6} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";


export default restApi({
        axios: DropVariables.axios,
        tableName: C6.um_notifications.TABLE_NAME,
        requestMethod: GET,
        queryCallback: () => ({
            [C6.SELECT]: [
                C6.um_notifications.ID,
                C6.um_notifications.TIME,
                C6.um_notifications.STATUS,
                C6.um_notifications.PHOTO,
                C6.um_notifications.TYPE,
                C6.um_notifications.URL,
                C6.um_notifications.CONTENT
            ],
            [C6.WHERE]: {
                [C6.um_notifications.USER]: DigApi.digApi.state.id
            },
            [C6.PAGINATION]: {
                [C6.PAGE]: 1,  // start at one
                [C6.LIMIT]: 100
            }
        }),
        responseCallback: (response) => {

            const restData = response?.data?.rest || {};

            updateRestfulObjectArray<iUser>([{
                ID: DigApi.digApi.state.id,
                notifications: restData
            }], "ID", "users")

        }
    });

