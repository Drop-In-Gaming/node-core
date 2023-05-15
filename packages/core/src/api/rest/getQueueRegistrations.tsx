import restApi, {GET} from "api/API";
import {C6} from "variables/C6";
//import Bootstrap from "Bootstrap";
import DropVariables from "variables/DropVariables";

export interface iGetQueuedTeams {
    compId: number
}

export default restApi<iGetQueuedTeams>({
    axios: DropVariables.axios,
    tableName: C6.dig_comp_registration.TABLE_NAME,
    requestMethod: GET,
    queryCallback: (request: iGetQueuedTeams) => {
        let {compId} = request;

        // where id normally cache, but registration data is dangerous to cache
        return {
            [C6.SELECT]: [
                [C6.DISTINCT, C6.dig_comp_registration.TEAM_ID],
                [C6.MAX, C6.dig_comp_registration.TEAM_FULL_TIMESTAMP]
            ],
            [C6.WHERE]: {
                [C6.dig_comp_registration.TEAM_FULL_TIMESTAMP]: [C6.IS, C6.NULL],
                [C6.dig_comp_registration.COMPETITIONS_ID]: [C6.EQUAL, compId]
            },
            [C6.GROUP_BY]: [
                C6.dig_comp_registration.TEAM_ID,
                C6.dig_comp_registration.TEAM_FULL_TIMESTAMP
            ],
        }
    },
    responseCallback: (response, _request) => {
        console.log(response);
        console.log(_request);
    }
});
