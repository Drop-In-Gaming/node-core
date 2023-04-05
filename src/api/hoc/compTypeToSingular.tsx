import {eCOMPETITION} from "variables/sharedInterfaces";

export default (ctid?: eCOMPETITION) => {
    switch (ctid) {
        case eCOMPETITION.MATCHES:
            return "match";
        case eCOMPETITION.TOURNAMENTS:
            return "tournament";
        case eCOMPETITION.BRACKETS:
            return "bracket";
        default:
            return "loading";
    }
}