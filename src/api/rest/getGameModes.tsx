import restApi, {GET} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_Competitions_Meta} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iGame} from "variables/sharedInterfaces";

export interface iGetUserMeta {
    game: iGame
    comp_type_id: number
}

export default restApi<iGetUserMeta, iDig_Competitions_Meta>({
        axios: DropVariables.axios,
        tableName: C6.dig_mode.TABLE_NAME,
        requestMethod: GET,
        queryCallback: (request) => {

            updateRestfulObjectArray<iGame>([{
                game_id: request.game.game_id,
                modes: null
            }], "game_id", "games")

            return {
                [C6.SELECT]: [
                    C6.dig_mode_game.MODE_GAME_ID,
                    C6.dig_mode.MODE_ID,
                    C6.dig_mode.NAME,
                    C6.dig_mode.MAX_PLAYERS,
                    C6.dig_mode.TEAM_SIZE,
                    C6.dig_mode.CREATED,
                ],
                [C6.WHERE]: {
                    [C6.dig_game.GAME_ID]: request.game.game_id,
                    [C6.dig_mode.COMP_TYPE_ID]: request.comp_type_id,
                    [C6.dig_mode.ARCHIVED]: 0,
                },
                [C6.JOIN]: {
                    [C6.INNER]: {
                        [C6.dig_mode_game.TABLE_NAME]: [
                            C6.dig_mode_game.MODE_ID,
                            C6.dig_mode.MODE_ID
                        ],
                        [C6.dig_game.TABLE_NAME]: [
                            C6.dig_mode_game.GAME_ID,
                            C6.dig_game.GAME_ID
                        ],
                    }
                },
                [C6.PAGINATION]: {
                    [C6.LIMIT]: 1000
                }
            }

        },
        responseCallback: (response, request) => {

            updateRestfulObjectArray<iGame>([{
                game_id: request.game.game_id,
                modes: (response?.data?.rest || [])
            }], "game_id", "games")

        }
    });

