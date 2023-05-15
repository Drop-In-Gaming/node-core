import restApi, {POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Wallet_Transactions} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iInvitation, iUser} from "variables/sharedInterfaces";

// yes, kinda weird to have its own file instead of using postWalletTransaction, but that goes through the transaction_log table.

export default restApi<{
    user_id: number,
    amount: string,
    action: string,
    comment: string,
    buyer_id: number
}, iDig_Wallet_Transactions>({
        axios: DropVariables.axios,
        tableName: C6.dig_wallet_transactions.TABLE_NAME,
        requestMethod: POST,
        queryCallback: (request) => {
            request.success ??= ()=> "Successfully paid for your teammate's entry!";
            request.error ??= ()=> 'An unknown issue occurred. We will be looking into this shortly. Please try again later.';
            return request
        },
        responseCallback: (_response, request, id) => {


            id && updateRestfulObjectArray<iUser>(previousState => {
                return [{
                    ID: request.buyer_id,
                    funds: (previousState.users?.find(user => user.ID === previousState.id)?.funds || 0) + parseFloat(request.amount),
                }]
            }, "ID", "users");

            // not 100% sure this works, but it should?
            updateRestfulObjectArray<iInvitation>(previousState => {
                return [{
                    invitation_id: previousState.invitations?.find(
                                       invite => invite.comp_id === request.comp_id &&
                                       invite.user_id === request.user_id &&
                                       invite.sender_id === request.buyer_id)?.invitation_id,
                    paid_by: request.buyer_id
                }]
            }, "invitation_id", "invitations");
        }
    });