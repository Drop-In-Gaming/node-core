import restApi, {GET} from "api/API";
import {C6, iDig_Sub_Mode} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iCompetitions} from "variables/sharedInterfaces";
export default restApi<{sub_mode_id: number, comp_id: number}, iDig_Sub_Mode>({
    axios: DropVariables.axios,
    tableName: C6.dig_sub_mode.TABLE_NAME,
    requestMethod: GET,
    queryCallback: (request) => {
        return {
            [C6.SELECT]: [
                C6.dig_sub_mode.SUB_MODE_ID,
                C6.dig_sub_mode.MODE_ID,
                C6.dig_sub_mode.NAME,
                C6.dig_sub_mode.TIME_LIMIT,
                C6.dig_sub_mode.CREATED,
                C6.dig_sub_mode.UPDATED
            ],
            [C6.WHERE]: {
                [C6.dig_sub_mode.SUB_MODE_ID]: request.sub_mode_id
            }
        }
    },
    responseCallback: (response, request) => {

        let restData: iDig_Sub_Mode = (response?.data?.rest?.length === 0) ? null : response?.data?.rest[0];

        updateRestfulObjectArray<iCompetitions>([{
            comp_id: request.comp_id,
            sub_mode: restData
        }], 'comp_id', 'competitions');

    }
})
