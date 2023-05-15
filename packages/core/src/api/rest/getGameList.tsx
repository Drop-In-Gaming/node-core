import restApi, {GET} from "api/API";
import {C6, dig_comp_platform, dig_vendor_game} from "variables/C6";
import DigApi from "DigApi";
import DropVariables from "variables/DropVariables";
import {iGame} from "variables/sharedInterfaces";

export const PLATFORM_IDS = 'platform_ids'

export default restApi({
        axios: DropVariables.axios,
        tableName: C6.dig_game.TABLE_NAME,
        requestMethod: GET,
        queryCallback: {
            [C6.SELECT]: [
                C6.dig_game.GAME_ID,
                C6.dig_game.NAME,
                C6.dig_game.CODE,
                C6.dig_game.GAME_LOGO_IMAGE,
                C6.dig_game.HEADER_BACKGROUND_IMAGE,
                C6.dig_game.DESCRIPTION,
                C6.dig_game.FEATURED_IMAGE,
                [C6.GROUP_CONCAT, dig_vendor_game.PLATFORM_ID, PLATFORM_IDS],
            ],
            [C6.JOIN]: {
                [C6.INNER]: {
                    [C6.dig_mode_game.TABLE_NAME]: [
                        C6.dig_mode_game.GAME_ID,
                        C6.dig_game.GAME_ID
                    ],
                    [C6.dig_competitions.TABLE_NAME]: [
                        C6.dig_competitions.MODE_GAME_ID,
                        C6.dig_mode_game.MODE_GAME_ID
                    ],
                },
                [C6.LEFT]: {
                    [C6.dig_comp_category.TABLE_NAME]: [
                        C6.dig_comp_category.COMP_ID,
                        C6.dig_competitions.COMP_ID
                    ],
                    [dig_comp_platform.TABLE_NAME]: [
                        dig_comp_platform.COMP_ID,
                        C6.dig_game.GAME_ID
                    ],
                    [dig_vendor_game.TABLE_NAME]: [
                        dig_vendor_game.GAME_ID,
                        C6.dig_game.GAME_ID
                    ]
                },
            },
            [C6.WHERE]: {
                [C6.dig_competitions.DELETED]: 0,
                [C6.dig_competitions.STATUS]: 0,
                1: {
                    0: [C6.dig_comp_category.COMP_ID, C6.IS, C6.NULL],
                    [C6.dig_comp_category.CAT_ID]: [C6.LESS_THAN, 5]
                }
            },
            [C6.GROUP_BY]: [
                C6.dig_game.GAME_ID,
                C6.dig_game.GAME_ORDER
            ],
            [C6.PAGINATION]: {
                [C6.ORDER]: {
                    [C6.dig_game.GAME_ORDER]: C6.ASC
                },
                [C6.LIMIT]: 100
            }
        },
        responseCallback: (response, _request) => {

            // any is the type for the map as we have not cast
            const games: iGame[] = response.data?.rest.map((game: any) => {

                game[PLATFORM_IDS] = game[PLATFORM_IDS]?.split(',')

                return game;

            }) || [];


            DigApi.digApi.setState({
                games: games
            })

        }
    })


