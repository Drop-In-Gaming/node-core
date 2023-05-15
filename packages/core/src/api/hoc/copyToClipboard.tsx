// return a promise
import {toast} from "react-toastify";
import DropVariables from "variables/DropVariables";

export default function copyToClipboard(textToCopy): void {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        navigator.clipboard.writeText(textToCopy);
        toast.success('Copied to clipboard!', DropVariables.toastOptionsDevs)

    } else {
        toast.warning('Copy to clipboard only works in secure context (https)')
    }
}