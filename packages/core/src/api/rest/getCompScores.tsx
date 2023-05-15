import restApi, {GET, iGetC6RestResponse} from "api/API";
import {C6, iDig_Comp_Score} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "../hoc/updateRestfulObjectArrays";
import {eCOMPETITION, iCompetitions} from "variables/sharedInterfaces";
import DigApi from "DigApi";

export default restApi<{comp_id: number}, iDig_Comp_Score, {}, iGetC6RestResponse<iDig_Comp_Score>>({
        axios: DropVariables.axios,
        tableName: C6.dig_comp_score.TABLE_NAME,
        requestMethod: GET,
        queryCallback: (request) => {

            // specify ORDER BY comp type
            let competition = DigApi.digApi.state.competitions?.find(comp => comp.comp_id === request.comp_id),
                orderBy = competition?.comp_type_id === eCOMPETITION.MATCHES ?
                    {[C6.ORDER]: {
                        [C6.dig_comp_score.TEAM_ID]: C6.ASC,
                        [C6.dig_comp_score.SCOREBOX]: C6.ASC
                    }}
                    :
                    {[C6.ORDER]: {
                        [C6.dig_comp_score.SCORE]: C6.DESC,
                        [C6.dig_comp_score.TEAM_ID]: C6.ASC,
                        [C6.dig_comp_score.SCOREBOX]: C6.ASC
                    }}

            // this query WILL fail if your sql mode is incorrectly set to the default. Avoid ONLY_FULL_GROUP_BY like the plague.
            // Locally, mysql refuses to read from any of the default config file locations, so if you experience the same, run set @@GLOBAL.sql_mode = "";
            // You will have to reset the sql mode each time you restart
            return {
                [C6.SELECT]: [
                    [C6.DISTINCT, C6.dig_comp_score.TEAM_ID],
                    C6.dig_comp_score.USER_ID,
                    C6.dig_comp_score.SCORE,
                    C6.dig_comp_score.SCOREBOX,
                    [C6.MAX, C6.dig_comp_score.CREATED]
                ],
                [C6.WHERE]: {
                    [C6.dig_comp_score.COMP_ID]: [C6.EQUAL, request.comp_id]
                },
                [C6.GROUP_BY]: [
                    C6.dig_comp_score.TEAM_ID,
                    C6.dig_comp_score.SCOREBOX
                ],
                [C6.PAGINATION]: orderBy
            }
        },
        responseCallback: (response, request) => {

            console.warn('Comp Scores!', response);

            // need to change a key name so state can actually be set (REST doesnt work with AS and the MAX function)
            let updatedScores: iDig_Comp_Score[] = response?.data?.rest?.map(scoreEntry => {
                return {
                    score: scoreEntry.score,
                    scorebox: scoreEntry.scorebox,
                    team_id: scoreEntry.team_id,
                    user_id: scoreEntry.user_id,
                    created: scoreEntry['MAX(wp_zesv6j_dig_comp_score.created)']
                }
            }) || [];

            // hopfully works
            updateRestfulObjectArray<iCompetitions>([{
                comp_id: request.comp_id,
                scores: updatedScores
            }], "comp_id", "competitions");

        }
    })


