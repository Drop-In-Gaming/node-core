import restApi, {iPutC6RestResponse, PUT} from "api/API";
import {C6, iDig_Comp_Invitation, iDig_Competitions} from "variables/C6";
import DropVariables from "variables/DropVariables";
import updateRestfulObjectArray from "../hoc/updateRestfulObjectArrays";
import {iCompetitions} from "variables/sharedInterfaces";
import deleteRestfulObjectArrays from "../hoc/deleteRestfulObjectArrays";
import getCompetitions, {removeCompetitionFromCache} from "./getCompetitions";

// Used to handle comp start/cancel/end from the frontend
// NOTE: The request expects either status OR public, not both
export interface iPutCompetition extends iDig_Competitions {
    comp_id: number,
    status?: number,
    public?: number
}

export default restApi<iPutCompetition, iDig_Competitions, {}, iPutC6RestResponse>({
        axios: DropVariables.axios,
        tableName: C6.dig_competitions.TABLE_NAME,
        requestMethod: PUT,
        queryCallback: (request) => {
            // message should probably be more dynamic
            request.success = 'Successfully updated the competition!'
            request.error = 'An unknown issue occurred while updating the competition. We will be looking into this shortly.'
            return request
        },
        responseCallback: (_response, request) => {
            deleteRestfulObjectArrays<iDig_Comp_Invitation>((previousState) : iDig_Comp_Invitation[] => {
                // get the objects to delete only
                return previousState.invitations?.filter(invitation => invitation.comp_id === request.comp_id) ?? []
            }, "invitation_id", "invitations")

            // things are gonna get saucy
            if (request.status === undefined && request.public === undefined) {
                // Dont have a great way to determine what happened without redoing all the logic but with questionable state here... so just pull
                removeCompetitionFromCache(request.comp_id);

                getCompetitions({
                    competitionIds: [request.comp_id],
                    fetchDependencies: true,
                    cacheResults: false
                });
                return;
            }

            //updateRestfulObjectArray<iCompetitions>(removeInvalidKeys(request as iCompetitions, [dig_competitions]), "comp_id", "competitions");
            updateRestfulObjectArray<iCompetitions>( [{
                ...request
            }], "comp_id", "competitions");

        }
    });