import restApi, {POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Transaction_Log, iDig_Wallet_Transactions} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";


export default restApi<{
    kt_sid: string,
    'user_id': number;
    'amount': string;
    'payment_token'?: string;
    'auth_status'?: number;
    'cc_auth_code'?: string;
    'cc_response_code'?: number;
    'cc_mask'?: string;
    'cvv_response'?: string;
    'cc_fname': string;
    'cc_lname': string;
    'cc_addr_line_1': string;
    'cc_addr_line_2'?: string;
    'cc_city'?: string;
    'cc_state'?: string;
    'cc_zip'?: string;
    'cc_country': string;
    'pp_authorization_status'?: string;
    'pp_authorization_amount'?: string;
    'pp_authorization_payer_email'?: string;
    success: () => string;
    error: () => string;
}, iDig_Wallet_Transactions & iDig_Transaction_Log>({
        axios: DropVariables.axios,
        tableName: [C6.dig_transaction_log.TABLE_NAME, C6.dig_wallet_transactions.TABLE_NAME],
        requestMethod: POST,
        queryCallback: (request) => {
            request.success ??= ()=> 'Successfully added funds to the wallet!';
            request.error ??= ()=> 'An unknown issue occurred while adding funds. We will be looking into this shortly. Please try again later.';
            return request
        },
        responseCallback: (_response, request, id) => {


            id && updateRestfulObjectArray<iUser>(previousState => {
                return [{
                    ID: request.user_id,
                    funds: (previousState.users?.find(user => user.ID === previousState.id)?.funds || 0) + parseFloat(request.amount),
                }]
            }, "ID", "users")
        }
    });
