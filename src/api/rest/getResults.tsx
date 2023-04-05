import restApi, {GET} from "api/API";
import {C6, iDig_Result_Type} from "variables/C6";
import DigApi from "DigApi";
import DropVariables from "variables/DropVariables";
import {iResult} from "variables/sharedInterfaces";

// Bracket matches need to use bracket comp_type_id to get the correct time_delay, which is not possible to calc and query against properly
// through REST. Instead, we'll specify manually on the request to keep things easy.
export interface iGetResults {
    comp_id: number,
    comp_type_id: number,
}
export default restApi<iGetResults, iResult & iDig_Result_Type>({
    axios: DropVariables.axios,
    tableName: [C6.dig_results.TABLE_NAME, C6.dig_result_type.TABLE_NAME],
    requestMethod: GET,
    queryCallback: (request) => {
        return {
            [C6.SELECT]: [
                C6.dig_results.RESULT_ID,
                C6.dig_results.DISPUTE_STATUS,
                C6.dig_results.CREATED,
                C6.dig_results.POSITION,
                C6.dig_results.COMP_ID,
                C6.dig_results.USER_ID,
                C6.dig_results.TEAM_ID,
                C6.dig_results.PAID,
                C6.dig_result_type.TIME_DELAY,
                C6.dig_result_type.PRIZE_PERCENTAGE
            ],
            [C6.JOIN]: {
                [C6.LEFT]: {
                    [C6.dig_result_type.TABLE_NAME]: [
                        C6.dig_result_type.COMP_TYPE_ID,
                        request.comp_type_id
                    ]
                }
            },
            [C6.WHERE]: {
                [C6.dig_results.COMP_ID]: request.comp_id
            }
        }
    },
    responseCallback: response => {

        let restData: iResult[] = response?.data?.rest || [];

        DigApi.bootstrap.setState({
            results: restData
        });

    }
})
