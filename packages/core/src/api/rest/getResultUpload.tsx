import restApi, {GET} from "api/API";
import {C6, iDig_Result_Upload} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iCompetitions} from "variables/sharedInterfaces";


export default restApi<{comp_id: number}, iDig_Result_Upload>({
    axios: DropVariables.axios,
    tableName: C6.dig_result_upload.TABLE_NAME,
    requestMethod: GET,
    queryCallback: (request) => ({
        [C6.SELECT]: [
            C6.dig_result_upload.USER_ID,
            C6.dig_result_upload.TEAM_ID,
            C6.dig_result_upload.POST_ID,
            C6.dig_result_upload.SCOREBOX
        ],
        [C6.JOIN]: {
            [C6.INNER]: {
                [C6.dig_competitions.TABLE_NAME]: [
                    C6.dig_competitions.COMP_ID,
                    C6.dig_result_upload.COMP_ID
                ]
            },
        },
        [C6.WHERE]: {
            [C6.dig_result_upload.COMP_ID]: [C6.EQUAL, request.comp_id]
        }
    }),
    responseCallback: (response, request) => {

        let restData: iDig_Result_Upload[] = response?.data?.rest || [];

        updateRestfulObjectArray<iCompetitions>([{
            comp_id: request.comp_id,
            score_uploads: restData
        }], 'comp_id', 'competitions');

    }
})
