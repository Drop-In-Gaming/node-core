import restApi, {iPostC6RestResponse, POST, removeInvalidKeys} from "api/API";
import updateRestfulObjectArray, {eUpdateInsertMethod} from "api/hoc/updateRestfulObjectArrays";
//import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {
    C6, dig_competitions,
    iDig_Comp_Platform,
    iDig_Comp_Region,
    iDig_Comp_Registration,
    iDig_Comp_Tourneytype,
    iDig_Competitions
} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iCompetitions} from "variables/sharedInterfaces";

// used to pass info about the bracket match in the bracket's json
export interface iBracketMatchInfo {
    roundType: string,
    roundNumber: number
}

export default restApi<{}, iDig_Competitions & iDig_Comp_Region & iDig_Comp_Platform & iDig_Comp_Registration & iDig_Comp_Tourneytype, {platform_id: number[], region_id: number[], team_id?: number[], bracket?: iBracketMatchInfo}, iPostC6RestResponse>({
    axios: DropVariables.axios,
    tableName: [C6.dig_competitions.TABLE_NAME, C6.dig_comp_region.TABLE_NAME, C6.dig_comp_platform.TABLE_NAME, C6.dig_comp_registration.TABLE_NAME],
    requestMethod: POST,
    queryCallback: (request) => {
        console.log('queryCallback', request)
        request.success ??= 'Competition created!'
        request.error ??= 'There was an issue creating this competition. Please try again.'
        return request;
    },
    responseCallback: (_response, request, id) => {

        if (!id) {
            return;
        }

        'number' === typeof id && updateRestfulObjectArray<iCompetitions>([{
            ...removeInvalidKeys(request, [dig_competitions]),
            comp_id: id,
        }], "comp_id", "competitions", eUpdateInsertMethod.FIRST);

    }
});

