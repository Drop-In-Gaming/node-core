import restApi, {POST} from "api/API";
import {C6, iDig_Comp_Score} from "variables/C6";
import DropVariables from "variables/DropVariables";
import getCompScores from "./getCompScores";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {eCOMPETITION, eCOMPETITION_STATUS, iCompetitions} from "variables/sharedInterfaces";
import getResults from "./getResults";

/* submitted data will always be within dataInsertMultipleRows, but each individual value should look like the interface below:
export interface iPostCompScore {
    team_id: number,
    comp_id: number,
    user_id: number,
    score: number[],
    scorebox: number[]
}*/

export default restApi<{}, iDig_Comp_Score, {} /* {score: number[], scorebox: number[]} */
    >({
        axios: DropVariables.axios,
        tableName: C6.dig_comp_score.TABLE_NAME,
        requestMethod: POST,
        queryCallback: (request) => {
            request.success ??= 'Successfully submitted score(s)!'
            request.error ??= 'An issue occurred while updating your score(s).'
            return request
        },
        responseCallback: (_response, request) => {
            // because of how scores work in tournaments, we need to actually trigger getCompScores from here
            // scores will always be grouped by comp id in this case, so we only need the first element
            if (request?.dataInsertMultipleRows !== undefined && request.dataInsertMultipleRows[0] !== undefined) {
                // .comp_id will never be undefined here but the editor doesn't know that
                let comp_id = request.dataInsertMultipleRows[0]?.comp_id || 0;

                if (_response?.data?.rest?.isComplete !== undefined) {
                    // match is complete. update state to reflect that and run getResult
                    updateRestfulObjectArray<iCompetitions>([{
                        comp_id: comp_id,
                        status: _response.data.rest.isComplete === true ? eCOMPETITION_STATUS.PAID : eCOMPETITION_STATUS.COMPLETED
                    }], 'comp_id', 'competitions');

                    getResults({
                        comp_id: comp_id,
                        comp_type_id: eCOMPETITION.MATCHES,
                        cacheResults: false
                    });
                }

                getCompScores({comp_id: comp_id, cacheResults: false});
            }
        }
    });