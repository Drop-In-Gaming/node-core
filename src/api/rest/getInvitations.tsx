import restApi, {GET} from "api/API";
import getCompetitions from "api/rest/getCompetitions";
import getUsers from "api/rest/getUsers";
import {C6} from "variables/C6";
import DigApi from "DigApi";
import DropVariables from "variables/DropVariables";
import {iInvitation} from "variables/sharedInterfaces";


export default restApi({
    axios: DropVariables.axios,
    tableName: C6.dig_comp_invitation.TABLE_NAME,
    requestMethod: GET,
    queryCallback: () => ({ // because we reference the bootstrap, we need to return an object, not set it statically
        [C6.SELECT]: [
            C6.dig_comp_invitation.INVITATION_ID,
            C6.dig_comp_invitation.USER_ID,
            C6.dig_comp_invitation.COMP_ID,
            C6.dig_comp_invitation.TEAM_ID,
            C6.dig_comp_invitation.SENDER_ID,
            C6.dig_comp_invitation.INVITATION_ID,
            C6.dig_comp_invitation.INVITATION_TYPE,
            C6.dig_comp_invitation.CREATED,
        ],
        [C6.WHERE]: {
            0: {
                [C6.dig_comp_invitation.USER_ID]: DigApi.bootstrap.state.id,
                [C6.dig_comp_invitation.SENDER_ID]: DigApi.bootstrap.state.id,
            }
        },
        [C6.PAGINATION]: {
            [C6.PAGE]: 1,
            [C6.LIMIT]: 1000
        }
    }),
    responseCallback: response => {

        let restData: iInvitation[] = response?.data?.rest || [];

        let uniqueCompetitionIds: number[] = [];

        let uniqueUserIds: number[] = [];

        DigApi.bootstrap.setState({
            invitations: restData
        });

        restData.map(invite => {

            if (invite.comp_id && false === uniqueCompetitionIds.includes(invite.comp_id)) {
                uniqueCompetitionIds.push(invite.comp_id)
            }

            if (invite.sender_id && false === uniqueUserIds.includes(invite.sender_id)) {
                uniqueUserIds.push(invite.sender_id)
            }

            if (invite.user_id && false === uniqueUserIds.includes(invite.user_id)) {
                uniqueUserIds.push(invite.user_id)
            }

        })

        console.log('Getting competition dependencies from getInvitations; uniqueCompetitionIds:', uniqueCompetitionIds)

        if (uniqueCompetitionIds.length > 0) {
            getCompetitions({
                competitionIds: uniqueCompetitionIds
            })
        }

        if (uniqueUserIds.length > 0) {
            getUsers({
                userIds: uniqueUserIds
            })
        }

    }
})
