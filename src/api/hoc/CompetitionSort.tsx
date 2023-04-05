import {sortDate} from "api/hoc/sortDate";
import {eCOMPETITION_STATUS, iCompetitions} from "variables/sharedInterfaces";
import DropVariables from "../../variables/DropVariables";


export default {
    sortCompetitionsId: (a: iCompetitions, b: iCompetitions) => {

        const aId = a.comp_id || 0;

        const bId = b.comp_id || 0;

        if (aId < bId) {

            return 1;

        }

        if (aId === bId) {

            return 0;

        }

        return -1;

    },
    sortCompetitionsPrize: (a: iCompetitions, b: iCompetitions, asc: boolean = true) :number => {

        const aPrize = DropVariables.totalPrize(a);

        const bPrize = DropVariables.totalPrize(b);

        if (asc ? aPrize < bPrize : aPrize > bPrize) {

            return -1;

        } else if (aPrize === bPrize) {

            return 0;

        }

        return 1;

    },
    sortCompetitionsBuyIn: (a: iCompetitions, b: iCompetitions, asc: boolean = true) => {

        const aBuyIn = a.buy_in || 0;

        const bBuyIn = b.buy_in || 0;

        if (asc ? aBuyIn < bBuyIn : aBuyIn > bBuyIn) {

            return 1;

        }

        if (aBuyIn === bBuyIn) {

            return 0;

        }

        return -1;

    },
    sortCompetitionsStatus: (a: iCompetitions, b: iCompetitions, asc: boolean = true) => {

        const aStatus = a.status || eCOMPETITION_STATUS.PAID;

        const bStatus = b.status || eCOMPETITION_STATUS.COMPLETED;

        if (asc ? aStatus < bStatus : aStatus > bStatus) {

            return 1;

        }

        if (aStatus === bStatus) {

            return 0;

        }

        return -1;

    },
    sortCompetitionsDateTime: (a: iCompetitions, b: iCompetitions) => {
        return sortDate(a.datetime, b.datetime);
    },
    sortCompetitionStatusLast: (status: eCOMPETITION_STATUS) => (a: iCompetitions, b: iCompetitions) => {

        if (a.status === b.status) {

            return 0;

        }

        if (a.status === status) {

            return 1;

        }

        return -1;

    },
    sortCompetitionsNameAlphabetical: (a: iCompetitions, b: iCompetitions, asc: boolean = true) => {

        // think and stack over for convert char to ascii
        const aName = a.name?.[0] || '';

        const bName = b.name?.[0] || '';

        if (asc ? aName < bName : aName > bName) {

            return -1;

        }

        if (aName === bName) {

            return 0;

        }

        return 1;
    },
    sortCompetitionMyRegistrationFirst: (user_id: number) => (a: iCompetitions, b: iCompetitions) => {
        const registeredA = a.registered_users?.includes(user_id) || false;

        const registeredB = b.registered_users?.includes(user_id) || false;

        if (registeredA === registeredB) {

            return 0;

        }

        if (registeredA) {

            return -1;

        }

        return 1;
    },
    sortCompetitionsMoreRegistrationsFirst: (a: iCompetitions, b: iCompetitions) => {

        const aLength = a.registered_users?.length || 0;

        const bLength = b.registered_users?.length || 0;

        if (aLength === bLength) {

            return 0

        }

        if (aLength > bLength) {

            return -1;

        }

        return 1;

    },
}