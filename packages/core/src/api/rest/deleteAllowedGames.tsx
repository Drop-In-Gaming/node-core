import restApi, {DELETE, iDeleteC6RestResponse} from "api/API";
import updateRestfulObjectArray from "api/hoc/updateRestfulObjectArrays";
import {C6, iDig_User_Allowed_Games} from "variables/C6";
import DropVariables from "variables/DropVariables";
import {iUser} from "variables/sharedInterfaces";

export default restApi<{
        game_id: number,
        user_id: number
    }, iDig_User_Allowed_Games, {}, iDeleteC6RestResponse>({
        axios: DropVariables.axios,
        tableName: C6.dig_user_allowed_games.TABLE_NAME,
        requestMethod: DELETE,
        queryCallback: (request) => {
            request.success = 'Successfully removed the allowed game association(s)!'
            request.error = 'An unknown issue occurred removing the allowed game.'
            return request
        },
        responseCallback: (_response, request, id) => {

            if (id) {

                updateRestfulObjectArray<iUser>((previousState) => {

                    const previousAllowedGames = previousState.users?.find(user => user.ID === request.user_id)?.allowedGames;

                    return [{
                        ID: request.user_id,
                        allowedGames: previousAllowedGames?.filter(allowedGame => allowedGame.game_id !== request.game_id) || []

                    }]

                }, "ID", "users")

            }
        }
    });


