import restApi, {POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Match_Confirm} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {eCOMPETITION_STATUS, iCompetitions} from "variables/sharedInterfaces";

export default restApi<{
        comp_id: number,
        team_id: number,
        agreement: number
    }, iDig_Match_Confirm>({
        axios: DropVariables.axios,
        tableName: C6.dig_match_confirm.TABLE_NAME,
        requestMethod: POST,
        queryCallback: (request) => {
            request.success = 'Successfully added the allowed game association(s)!'
            request.error = 'An unknown issue occurred. We will be looking into this shortly.'
            return request
        },
        responseCallback: (_response, request) => {

            if (request.agreement === 1) {
                updateRestfulObjectArray<iCompetitions>([{
                    comp_id: request.comp_id,
                    status: eCOMPETITION_STATUS.PAID
                }], "comp_id", "competitions");
            }

        }
    });
