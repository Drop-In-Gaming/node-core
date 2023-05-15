import restApi, {GET, iGetC6RestResponse} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Competitions_Meta} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iCompetitions} from "variables/sharedInterfaces";
import getSubMode from "./getSubMode";

export interface iGetCompetitionMeta {
    competition: iCompetitions
}

export default restApi<iGetCompetitionMeta, iDig_Competitions_Meta, {}, iGetC6RestResponse<iDig_Competitions_Meta>>({
        axios: DropVariables.axios,
        tableName: C6.dig_competitions_meta.TABLE_NAME,
        requestMethod: GET,
        queryCallback: (request) => {

            updateRestfulObjectArray<iCompetitions>([{
                comp_id: request.competition.comp_id,
                competitionsMeta: []
            }], "comp_id", "competitions")

            return {
                [C6.WHERE]: {
                    [C6.dig_competitions_meta.COMP_ID]: request.competition.comp_id,
                },
                [C6.PAGINATION]: {
                    [C6.LIMIT]: 1000
                }
            }

        },
        responseCallback: (response, request) => {

            let restData = response?.data?.rest ?? [];

            updateRestfulObjectArray<iCompetitions>([{
                comp_id: request.competition.comp_id,
                competitionsMeta: restData
            }], "comp_id", "competitions");

            // have to do this to dig for sub_mode... God I hate this table
            // we can't even break after finding the key and the search has to continue for the remaining elements....
            restData.map((meta: iDig_Competitions_Meta) => {
                if (meta.meta_key === "_dig_comp_sub_mode" && meta.meta_value !== undefined) {
                    getSubMode({comp_id: request.competition.comp_id, sub_mode_id: parseInt(meta.meta_value)});
                }
            });

        }
    });
