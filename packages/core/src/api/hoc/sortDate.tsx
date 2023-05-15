import moment from "moment/moment";


export function sortDate(a?: string, b?: string) {

    const aDatetime = moment(a);

    const bDatetime = moment(b);

    if (aDatetime.isSame(bDatetime)) {

        return 0;

    }

    if (aDatetime.isBefore(bDatetime)) {

        return -1;

    }

    return 1;
}