import restApi, {iPostC6RestResponse, POST} from "api/API";
import {globalNavigate} from "api/hoc/GlobalHistory";
import DigApi from "DigApi";
import {C6, iDig_Contact_Support} from "variables/C6";
import DropVariables from "variables/DropVariables";


export default restApi<{
    support_name: string;
    support_email: string;
    support_callback_requested: number;
    support_phone_number: string;
    support_category: string;
    support_message: string;
    }, iDig_Contact_Support, {}, iPostC6RestResponse<iDig_Contact_Support>>({
        axios: DropVariables.axios,
        tableName: C6.dig_contact_support.TABLE_NAME,
        requestMethod: POST,
        queryCallback: (request) => {
            request.support_from_user_id = DigApi.bootstrap.state.id
            request.success = 'Successfully sent your support request!'
            request.error = 'An unexpected issue occurred. Please react our to Drop-In Gaming directly at support@dropingaming.com'
            return request
        },
        responseCallback: (_response, _request, _id) => {


            globalNavigate("/")

        }
    });
