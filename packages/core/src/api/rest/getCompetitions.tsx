import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import getPosts, {ePost} from "api/rest/getPosts";
import getRegistrations from "api/rest/getRegistrations";
import getTeams from "api/rest/getTeams";
import {
    eCOMPETITION,
    eCOMPETITION_CATEGORY,
    eCOMPETITION_STATUS,
    eCOMPETITION_TIMING,
    iCompetitions
} from "variables/sharedInterfaces";
import {C6} from "variables/C6";
import DropVariables from "variables/DropVariables";
import getUsers from "api/rest/getUsers";
import {toast} from "react-toastify";
import restApi, {GET, iGetC6RestResponse} from "api/API";
import getCompetitionMeta from "./getCompetitionMeta";
import getResults from "./getResults";
import getCompScores from "./getCompScores";
import getCompEvidence from "./getCompEvidence";
import getResultUpload from "./getResultUpload";

export interface iGetCompetitions {
    competitionIds?: number[],
    competition?: eCOMPETITION,
    page?: number,
    userID?: number,
    category?: eCOMPETITION_CATEGORY,
    timing?: eCOMPETITION_TIMING,
    gameID?: number,
    fetchDependencies?: boolean
}

let competitionCache: number[] = [];

export function clearCompetitionCache() {
    competitionCache = []
}

export function removeCompetitionFromCache(comp_id: number) {
    competitionCache = competitionCache.filter(c => c !== comp_id);
}

function getCompetitionMetaSubQuery(value: string, as: string): Array<any> {
    return [
        C6.SELECT,
        C6.dig_competitions_meta.TABLE_NAME,
        null,
        {
            [C6.SELECT]: [
                C6.dig_competitions_meta.META_VALUE
            ],
            [C6.WHERE]: {
                [C6.dig_competitions_meta.COMP_ID]: C6.dig_competitions.COMP_ID,
                [C6.dig_competitions_meta.META_KEY]: value
            }
        },
        as
    ];
}

interface iIntermediateCompetitionReturnValues {
    comp_id?: number,
    registered_users: string | string[] | number[],
    incomplete_teams: string | string[] | number[],
    complete_teams: string | string[] | number[],
    vendors: string | string[],
    max_players: number,
}

export default restApi<iGetCompetitions, iCompetitions, { comp_id?: number }, iGetC6RestResponse<iCompetitions, iIntermediateCompetitionReturnValues>>({
    axios: DropVariables.axios,
    tableName: C6.dig_competitions.TABLE_NAME,
    requestMethod: GET,
    queryCallback: (request) => {

        getPosts({
            queryPostType: ePost.GAME_RULES,
        })

        let competitionsQueue: number[] = [];

        if (undefined !== request.competitionIds) {

            request.competitionIds?.map(id => {

                if (false === competitionCache.includes(id)) {

                    competitionCache.push(id)

                    competitionsQueue.push(id)

                    let fetchComp: iCompetitions = {
                        comp_id: id
                    };

                    // todo - get this out of the loop and pass all 'empty' temp values to updateRestfulObjectArray at one time
                    updateRestfulObjectArray<iCompetitions>([fetchComp], "comp_id", "competitions")

                    if (DropVariables.isLocal) {
                        toast.info("DEVS: Competition request was not found in cache. (" + id + ")", DropVariables.toastOptionsDevs);
                    }

                } else {

                    if (DropVariables.isLocal) {
                        toast.warning("DEVS: Competition found in cache. (" + id + ")", DropVariables.toastOptionsDevs);
                    }

                }

            })

            if (0 === competitionsQueue.length) {

                return null;

            }

        }

        let {competition, page, userID, category, timing, gameID} = request;

        const userIdSet = undefined !== userID;

        const query = {
            [C6.SELECT]: [

                C6.dig_competitions.COMP_ID,
                C6.dig_competitions.COMP_TYPE_ID,
                C6.dig_competitions.MODE_GAME_ID,
                C6.dig_competitions.BEST_OF,
                C6.dig_competitions.NOW_FLAG,
                C6.dig_competitions.DATETIME,
                C6.dig_competitions.PUBLIC,
                C6.dig_competitions.PIN,
                C6.dig_competitions.ORGANIZER_ID,
                C6.dig_competitions.STATUS,
                C6.dig_competitions.DELETED,
                C6.dig_competitions.CREATED,
                C6.dig_competitions.MODIFIED,

                C6.dig_competitions.BUY_IN,
                [C6.dig_custom_buy_in.BUY_IN, C6.AS, 'custom_buy_in'],

                C6.dig_competitions.PARENT_COMP,

                C6.dig_custom_prize_pool.PRIZE,

                // todo - these generate sub-select queries which are generally slow
                getCompetitionMetaSubQuery('_sponsor_photo', 'sponsor_photo'),

                getCompetitionMetaSubQuery('_dig_comp_title', 'competition_title'),

                getCompetitionMetaSubQuery('_guaranteed', 'guaranteed'),

                C6.dig_game.NAME,
                C6.dig_game.GAME_ID,
                C6.dig_game.GAME_LOGO_IMAGE,
                C6.dig_game.FEATURED_IMAGE,
                C6.dig_game.CODE,

                C6.dig_comp_type.COMP_PERCENTAGE,

                [
                    C6.SELECT,
                    C6.dig_comp_registration.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            // [GROUP_CONCAT, table column, name (empty will give the default validated name), order by column, order by type (ASC or DESC)]
                            [C6.GROUP_CONCAT, C6.dig_comp_registration.TEAM_ID, "", C6.dig_comp_registration.TEAM_FULL_TIMESTAMP, C6.ASC]
                        ],
                        [C6.WHERE]: {
                            [C6.dig_comp_registration.COMPETITIONS_ID]: C6.dig_competitions.COMP_ID,
                            [C6.dig_comp_registration.TEAM_FULL_TIMESTAMP]: [C6.IS_NOT, C6.NULL]
                        }
                    },
                    'complete_teams'
                ],
                [
                    C6.SELECT,
                    C6.dig_comp_registration.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            [C6.GROUP_CONCAT, C6.dig_comp_registration.TEAM_ID]
                        ],
                        [C6.WHERE]: {
                            [C6.dig_comp_registration.TEAM_FULL_TIMESTAMP]: [C6.IS, C6.NULL],
                            [C6.dig_comp_registration.COMPETITIONS_ID]: C6.dig_competitions.COMP_ID
                        }
                    },
                    'incomplete_teams'
                ],
                [
                    C6.SELECT,
                    C6.dig_comp_registration.TABLE_NAME,
                    null,
                    {
                        [C6.SELECT]: [
                            [C6.GROUP_CONCAT, C6.dig_comp_registration.USER_ID]
                        ],
                        [C6.WHERE]: {
                            [C6.dig_comp_registration.COMPETITIONS_ID]: C6.dig_competitions.COMP_ID,
                        }
                    },
                    'registered_users'
                ],
                [C6.GROUP_CONCAT, C6.dig_comp_platform.PLATFORM_ID, 'dig_comp_platforms'],
                [C6.GROUP_CONCAT, C6.dig_categories.CATEGORY_NAME, 'categories'],
                [C6.GROUP_CONCAT, C6.dig_vendor.VENDOR_NAME, 'vendors'],
                [C6.GROUP_CONCAT, C6.dig_dispute_posts.POST_ID, 'dispute_posts'],
                C6.dig_mode.MAX_PLAYERS,
                C6.dig_mode.MODE_ID,
                C6.dig_mode.NAME,
                C6.dig_mode.TEAM_SIZE,
                C6.dig_mode_game.RULES_POST_ID,
                C6.dig_mode_game.MODE_GAME_ID,
                //C6.posts.POST_CONTENT,

                C6.dig_comp_tourneytype.BRACKET

            ],
            [C6.JOIN]: {
                [C6.LEFT]: {
                    [C6.dig_comp_registration.TABLE_NAME]: {
                        [C6.dig_comp_registration.COMPETITIONS_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_custom_prize_pool.TABLE_NAME]: {
                        [C6.dig_custom_prize_pool.COMP_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_custom_buy_in.TABLE_NAME]: {
                        [C6.dig_custom_buy_in.COMP_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_comp_category.TABLE_NAME]: {
                        [C6.dig_comp_category.COMP_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_comp_platform.TABLE_NAME]: {
                        [C6.dig_comp_platform.COMP_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_mode_game.TABLE_NAME]: {
                        [C6.dig_mode_game.MODE_GAME_ID]: C6.dig_competitions.MODE_GAME_ID,
                    },
                    [C6.dig_vendor_game.TABLE_NAME]: {
                        [C6.dig_vendor_game.PLATFORM_ID]: C6.dig_comp_platform.PLATFORM_ID,
                        [C6.dig_vendor_game.GAME_ID]: C6.dig_mode_game.GAME_ID
                    },
                    [C6.dig_vendor.TABLE_NAME]: {
                        [C6.dig_vendor.VENDOR_ID]: C6.dig_vendor_game.VENDOR_ID
                    },
                    [C6.dig_comp_type.TABLE_NAME]: {
                        [C6.dig_competitions.COMP_TYPE_ID]: C6.dig_comp_type.COMP_TYPE_ID,
                    },
                    [C6.dig_game.TABLE_NAME]: {
                        [C6.dig_game.GAME_ID]: C6.dig_mode_game.GAME_ID,
                    },
                    [C6.dig_mode.TABLE_NAME]: {
                        [C6.dig_mode.MODE_ID]: C6.dig_mode_game.MODE_ID,
                    },
                    [C6.dig_categories.TABLE_NAME]: {
                        [C6.dig_categories.ID]: C6.dig_comp_category.CAT_ID
                    },
                    [C6.dig_comp_registration.TABLE_NAME]: {
                        [C6.dig_comp_registration.COMPETITIONS_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_comp_tourneytype.TABLE_NAME]: {
                        [C6.dig_comp_tourneytype.COMP_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_custom_prize_pool.TABLE_NAME]: {
                        [C6.dig_custom_prize_pool.COMP_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_match_confirm.TABLE_NAME]: {
                        [C6.dig_match_confirm.COMP_ID]: C6.dig_competitions.COMP_ID
                    },
                    [C6.dig_dispute_posts.TABLE_NAME]: {
                        [C6.dig_dispute_posts.COMP_ID]: C6.dig_competitions.COMP_ID
                    }
                },
            },
            [C6.WHERE]: {},
            [C6.GROUP_BY]: [
                C6.dig_game.NAME,
                C6.dig_competitions.DATETIME,
                C6.dig_custom_prize_pool.PRIZE,
                C6.dig_competitions.PIN,
                C6.dig_comp_type.COMP_PERCENTAGE,
                C6.dig_competitions.COMP_ID,
                C6.dig_comp_tourneytype.BRACKET,
                C6.dig_custom_buy_in.BUY_IN,
            ],
            [C6.PAGINATION]: {
                [C6.ORDER]: {
                    [C6.dig_competitions.DATETIME]: C6.ASC,
                },
                [C6.LIMIT]: 200,
                // page is handled by the api wrapper
            }
        };

        if (0 !== competitionsQueue.length) {

            query[C6.WHERE][C6.dig_competitions.COMP_ID] = [C6.IN, competitionsQueue];

        }

        if (competition !== eCOMPETITION.ALL &&
            competition !== undefined &&
            competition !== null) {

            query[C6.WHERE][C6.dig_competitions.COMP_TYPE_ID] = competition;

        }

        query[C6.PAGINATION][C6.PAGE] = page;

        if (userIdSet) {

            query[C6.WHERE][C6.dig_comp_registration.USER_ID] = userID;

        }

        if (gameID) {

            query[C6.WHERE][C6.dig_mode_game.GAME_ID] = gameID;

        }

        switch (timing) {

            case undefined:
            case eCOMPETITION_TIMING.ALL:
                break;
            case eCOMPETITION_TIMING.PAST:
                query[C6.WHERE][0][C6.dig_competitions.DATETIME] = [C6.LESS_THAN, C6.NOW];
                break;
            case eCOMPETITION_TIMING.FUTURE:

                query[C6.WHERE][0] = {
                    [C6.dig_competitions.DATETIME]: [C6.GREATER_THAN_OR_EQUAL_TO, C6.NOW],
                    [C6.dig_competitions.NOW_FLAG]: 1,
                };

                query[C6.WHERE][C6.dig_competitions.PUBLIC] = 1;

                query[C6.WHERE][C6.dig_competitions.DELETED] = 0;

                query[C6.WHERE][C6.dig_competitions.PARENT_COMP] = 0;

                query[C6.WHERE][C6.dig_competitions.STATUS] = [
                    C6.NOT_IN,
                    [
                        eCOMPETITION_STATUS.STARTED,
                        eCOMPETITION_STATUS.CANCELED,
                        eCOMPETITION_STATUS.PAID,
                        eCOMPETITION_STATUS.COMPLETED,
                    ]
                ];

                break;
            case eCOMPETITION_TIMING.NOW:
                query[C6.WHERE][0] = {
                    [C6.dig_competitions.DATETIME]: [C6.EQUAL, C6.NOW],
                    [C6.dig_competitions.NOW_FLAG]: 1
                };
                query[C6.WHERE][0][C6.dig_competitions.DATETIME] = [C6.EQUAL, C6.NOW]; // stupid lol
                break;

        }

        if (undefined !== category && category !== null && category !== eCOMPETITION_CATEGORY.ALL) {

            query[C6.WHERE][C6.dig_categories.ID] = category

        }


        return query;

    },
    responseCallback: (response, request) => {

        let restData = response?.data?.rest || [];

        let uniqueUsers: number[] = [];

        let uniqueTeams: number[] = [];

        restData = restData.map((value) => {

            value.registered_users = 'string' === typeof value.registered_users
                && value.registered_users?.split(',') || [];

            value.registered_users = value.registered_users?.map((stringId: string) => {

                const id = parseInt(stringId);

                if (false === uniqueUsers.includes(id)) {

                    uniqueUsers.push(id);

                }

                return id;
            })

            value.incomplete_teams = 'string' === typeof value.incomplete_teams
                && value.incomplete_teams?.split(',') || [];

            value.incomplete_teams = value.incomplete_teams.map(stringId => {

                const id = parseInt(stringId);

                if (false === uniqueTeams.includes(id)) {
                    uniqueTeams.push(id)
                }

                return id;
            })

            value.complete_teams = 'string' === typeof value.complete_teams
                && value.complete_teams?.split(',') || [];

            value.complete_teams = value.complete_teams?.map(stringId => {

                const id = parseInt(stringId);

                if (false === uniqueTeams.includes(id)) {
                    uniqueTeams.push(id)
                }

                return id;

            }) ?? [];


                // if there are more complete teams than max_players (max teams), move the excess over to incomplete_teams (queue)
                while (value.complete_teams.length > (value.max_players ?? 0)) {
                    // pop teams from the back of the complete_teams array and into the front of incomplete_teams (queue)
                    let queueTeamId = value?.complete_teams?.pop();

                    if (queueTeamId !== undefined) {
                        value.incomplete_teams.unshift(queueTeamId);
                    }
                }

            value.vendors = 'string' === typeof value.vendors && value.vendors?.split(',') || [];

            return value

        })

        console.log('updateComp from GetComp ', restData)

        updateRestfulObjectArray<iCompetitions>(restData as iCompetitions[], "comp_id", "competitions")

        if (true === request?.fetchDependencies) {

            if (1 === request.competitionIds?.length) {

                const getMetaForCompetition = request.competitionIds?.find(x => x !== undefined);

                // the data has been cast at this point, so we can safely
                const thisCompData = restData[0] as iCompetitions

                getMetaForCompetition && getCompetitionMeta({
                    competition: {
                        comp_id: getMetaForCompetition
                    }
                })

                if (thisCompData?.comp_type_id === eCOMPETITION.MATCHES && (thisCompData?.status === eCOMPETITION_STATUS.COMPLETED || thisCompData?.status === eCOMPETITION_STATUS.PAID)) {
                    getResults({
                        comp_id: thisCompData?.comp_id,
                        comp_type_id: (thisCompData?.parent_comp || 0) !== 0 ? eCOMPETITION.BRACKETS : eCOMPETITION.MATCHES,
                    });
                }

                getCompScores({comp_id: thisCompData?.comp_id});

                // result_upload = tournament score pictures
                // comp_evidence = match dispute info
                (thisCompData?.comp_type_id === eCOMPETITION.MATCHES && getCompEvidence({comp_id: thisCompData?.comp_id}))
                    || getResultUpload({comp_id: thisCompData?.comp_id});

            }

            if (undefined !== request.competitionIds) {

                // noinspection JSIgnoredPromiseFromCall
                getRegistrations({
                    competitionIds: request.competitionIds
                });

            }

            if (0 !== uniqueUsers.length) {

                console.log('Getting User dependencies from getCompetitions; uniqueUsers:', uniqueUsers)

                // noinspection JSIgnoredPromiseFromCall
                getUsers({
                    userIds: uniqueUsers
                })

            }

            if (0 !== uniqueTeams.length) {

                console.log('Getting Team dependencies from getCompetitions; uniqueTeams:', uniqueTeams)

                // noinspection JSIgnoredPromiseFromCall
                getTeams({
                    teamIds: uniqueTeams
                })

            }

        }

    }
});
