import {iTournamentScoring} from "variables/sharedInterfaces";
import {iDig_Comp_Score} from "variables/C6";

export default {
    sortTournamentScoreTotal: (a: iTournamentScoring, b: iTournamentScoring) => {
        const aTotal = a.scoreTotal || 0;

        const bTotal = b.scoreTotal || 0;

        if (aTotal < bTotal) {

            return 1;

        }

        if (aTotal === bTotal) {

            return 0;

        }

        return -1;
    },
    sortScoresByScoreboxAsc: (a: iDig_Comp_Score, b: iDig_Comp_Score) => {
        const aScorebox = a.scorebox || 1;

        const bScorebox = b.scorebox || 1;

        if (aScorebox < bScorebox) {
            return -1;
        }

        if (aScorebox === bScorebox) {
            return 0;
        }

        return 1;
    },
    sortScoresByTeamAsc: (a: iDig_Comp_Score, b: iDig_Comp_Score) => {
        const aTeam = a.team_id || 1;
        const bTeam = b.team_id || 1;

        if (aTeam < bTeam) {
            return -1;
        }

        if (aTeam === bTeam) {
            return 0;
        }

        return 1;
    },
    sortScoresByTeamScoreboxAsc: (a: iDig_Comp_Score, b: iDig_Comp_Score) => {
        if (a.team_id === b.team_id) {
            return (a.scorebox ?? 0) - (b.scorebox ?? 0);
        }

        if ((a.team_id ?? 0) < (b.team_id ?? 0)) {
            return -1;
        }

        return 1;
    }
}