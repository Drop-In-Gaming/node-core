import {toast} from "react-toastify";
import restApi, {GET} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import getUsers from "api/rest/getUsers";
import DropVariables from "variables/DropVariables";
import {C6, iDig_User_Team} from "variables/C6";
import DigApi from "DigApi";
import {iTeam} from "variables/sharedInterfaces";
import getTeamRosters from "./getTeamRosters";


export interface iGetTeams {
    userId?: number,
    teamIds?: number[],
}

const teamsRequestCache: string[] = []; // json cache

function getTeamMeta(value: string, as: string): Array<any> {
    return [
        C6.SELECT,
        C6.dig_user_team_meta.TABLE_NAME,
        null,
        {
            [C6.SELECT]: [
                C6.dig_user_team_meta.META_VALUE
            ],
            [C6.WHERE]: {
                [C6.dig_user_team_meta.META_ID]: C6.dig_user_team.USER_TEAM_ID,
                [C6.dig_user_team_meta.META_KEY]: value
            }
        },
        as
    ];
}

const getTeamMembers = (accepted: boolean): Array<any> => {
    return [
        C6.SELECT,
        C6.dig_team_roster.TABLE_NAME,
        null,
        {
            [C6.SELECT]: [
                [C6.GROUP_CONCAT, C6.dig_team_roster.UID]
            ],
            [C6.WHERE]: {
                [C6.dig_team_roster.USER_TEAM_ID]: C6.dig_user_team.USER_TEAM_ID,
                [C6.dig_team_roster.ACCEPTANCE]: accepted ? 1 : 0
            }
        },
        'roster' + (accepted ? 'Accepted' : 'Pending')
    ];
}


export default restApi<iGetTeams, iDig_User_Team>({
    axios: DropVariables.axios,
    tableName: C6.dig_user_team.TABLE_NAME,
    requestMethod: GET,
    queryCallback: (request: iGetTeams) => {

        const requestSerialized: string = JSON.stringify(request);

        if (teamsRequestCache.includes(requestSerialized)) {

            if (DropVariables.isLocal) {

                toast.warning("DEVS: Competition(s) request in cache. (" + requestSerialized + ")", DropVariables.toastOptionsDevs);

            }

            return undefined;

        } else {

            teamsRequestCache.push(requestSerialized);

        }

        if (undefined === request ||
            (0 === request.teamIds?.length
                && undefined === request.userId)) {

            throw Error('You must provide request parameters to getTeams!')

        }

        let params = {
            [C6.SELECT]: [
                C6.dig_user_team.USER_TEAM_ID,
                C6.dig_user_team.UID,
                C6.dig_user_team.TEAM_NAME,
                C6.dig_user_team.TEAM_DESC,
                C6.dig_user_team.TEAM_PICTURE,
                C6.dig_user_team.TEAM_TYPE,
                C6.dig_user_team.HIDE,
                C6.dig_user_team.TEAM_SIZE_ID,
                C6.dig_user_team.CREATED,
                C6.dig_user_team.UPDATED,
                getTeamMembers(false),
                getTeamMembers(true),
                getTeamMeta('win', 'win'),
                getTeamMeta('lose', 'lose'),
                getTeamMeta('cumulate_funds', 'cumulate_funds'),
            ],
            [C6.WHERE]: {},
            [C6.PAGINATION]: {
                [C6.PAGE]: 1,
                [C6.LIMIT]: 100
            }
        };

        const bootstrap = DigApi.bootstrap;

        bootstrap.state.teams === undefined && bootstrap.setState({
            teams: null
        });

        if (undefined !== request?.userId) {


            params[C6.WHERE][C6.dig_user_team.UID] = request.userId;

        } else if (undefined !== request?.teamIds && 0 < request.teamIds.length) {

            params[C6.WHERE][C6.dig_user_team.USER_TEAM_ID] = [C6.IN, request.teamIds]

        } else {

            console.warn('getTeams request is missing userId or teamIds.', request)

            return null;

        }

        console.log('getTeams params', params)

        return params;

    }, responseCallback: (response, _request, _test) => {

        let restData = response?.data?.rest || [];

        let uniqueUsers: number[] = [];

        let teamIds: number[] = [];

        console.log('restData', restData)

        const mapRawRoster = id => {

            const userId = parseInt(id)

            if (false === uniqueUsers.includes(userId)) {

                uniqueUsers.push(userId)

            }

            return userId;

        };

        restData = restData.map(value => {

            // Accepted
            value.rosterAccepted = (value.rosterAccepted?.split(',') || []).map(mapRawRoster);

            // Pending
            value.rosterPending = (value.rosterPending?.split(',') || []).map(mapRawRoster);

            teamIds.push(value.user_team_id);

            return value

        })

        console.log("Gathering User dependencies from getUsers in getTeams; uniqueUsers:", uniqueUsers)

        // noinspection JSIgnoredPromiseFromCall
        if (uniqueUsers.length > 0) {
            getUsers({
                userIds: uniqueUsers
            });
        }

        if (teamIds.length > 0) {
            getTeamRosters({
                user_team_ids: teamIds
            });
        }

        updateRestfulObjectArray<iTeam>(restData, "user_team_id", "teams")

    }
})


