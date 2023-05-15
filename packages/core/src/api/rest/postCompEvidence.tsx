import restApi, {POST} from "api/API";
import {C6, iDig_Comp_Evidence} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {iCompetitions, iResult} from "variables/sharedInterfaces";

export default restApi<iDig_Comp_Evidence, iDig_Comp_Evidence>({
        axios: DropVariables.axios,
        tableName: C6.dig_comp_evidence.TABLE_NAME,
        requestMethod: POST,
        queryCallback: (request) => {
            request.success ??= 'Successfully submitted dispute!'
            request.error ??= 'An issue occurred while updating your score(s).'
            return request
        },
        responseCallback: (_response, request) => {

            updateRestfulObjectArray<iCompetitions>([{
                comp_id: request.comp_id,
                match_dispute_evidence: request
            }], 'comp_id', 'competitions');

            // update result as disputed
            updateRestfulObjectArray<iResult>((prev) => {
                let result = prev.results?.find((result) => result.comp_id === request.comp_id && result.team_id === request.team_id);

                if (result !== undefined) {
                    result.dispute_status = 1;
                    return [result];
                }

                return [];
            }, 'result_id', 'results')
        }
    });