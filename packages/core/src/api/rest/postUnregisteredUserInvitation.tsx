import restApi, {POST} from "api/API";
import {C6, iDig_Temp_Invite} from "variables/C6";
import DropVariables from "variables/DropVariables";



export default restApi<iDig_Temp_Invite, iDig_Temp_Invite>({
        axios: DropVariables.axios,
        tableName: C6.dig_competitions.TABLE_NAME,
        requestMethod: POST,
        queryCallback: (request) => {
            // message should probably be more dynamic
            request.success = 'Invitation sent successfully!'
            request.error = 'There was an error sending your invitation. Ensure the email or phone number you entered is correct and try again.'
            return request
        },
        responseCallback: (_response) => {
            // no state update since we never show unregistered invitations on the site. That could change, but not for MVP.
        }
    });