import restApi, {POST} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_User_Allowed_Games} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";

export default restApi<{
        game_id: number,
        user_id: number
    }, iDig_User_Allowed_Games>({
        axios: DropVariables.axios,
        tableName: C6.dig_user_allowed_games.TABLE_NAME,
        requestMethod: POST,
        queryCallback: (request) => {
            request.success = 'Successfully added the allowed game association(s)!'
            request.error = 'An unknown issue occurred adding the game to the allowed associations list. We will be looking into this shortly.'
            return request
        },
        responseCallback: (_response, request, id) => {

            if (id) {

                updateRestfulObjectArray<iUser>((previousState) => {

                    const previousAllowedGames = previousState.users?.find(user => user.ID === request.user_id)?.allowedGames;

                    const newGame: iDig_User_Allowed_Games = {
                        user_id: request.user_id,
                        game_id: request.game_id,
                    }

                    return [{
                        ID: request.user_id,
                        allowedGames: [
                            ...(previousAllowedGames || []),
                            newGame,
                        ]
                    }]

                }, "ID", "users")

            }


        }
    });
