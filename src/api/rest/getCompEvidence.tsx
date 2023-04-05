import restApi, {GET} from "api/API";
import {C6, iDig_Comp_Evidence} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iCompetitions} from "variables/sharedInterfaces";


export default restApi<{comp_id: number}, iDig_Comp_Evidence>({
    axios: DropVariables.axios,
    tableName: C6.dig_comp_evidence.TABLE_NAME,
    requestMethod: GET,
    queryCallback: (request) => ({
        [C6.SELECT]: [
            C6.dig_comp_evidence.USER_ID,
            C6.dig_comp_evidence.TEAM_ID,
            C6.dig_comp_evidence.EVIDENCE_DESC,
            C6.dig_comp_evidence.EVIDENCE_EXTERNAL_URL,
        ],
        [C6.JOIN]: {
            [C6.INNER]: {
                [C6.dig_competitions.TABLE_NAME]: [
                    C6.dig_competitions.COMP_ID,
                    C6.dig_comp_evidence.COMP_ID
                ]
            },
        },
        [C6.WHERE]: {
            [C6.dig_comp_evidence.COMP_ID]: [C6.EQUAL, request.comp_id]
        }
    }),
    responseCallback: (response, request) => {

        let restData: iDig_Comp_Evidence = (response?.data?.rest?.length === 0) ? null : response?.data?.rest[0];

        updateRestfulObjectArray<iCompetitions>([{
            comp_id: request.comp_id,
            match_dispute_evidence: restData
        }], 'comp_id', 'competitions');

    }
})
