import {AxiosResponse} from "axios";
import {toast} from "react-toastify";
import DropVariables from "variables/DropVariables";


// todo - use bootstrap, it currently is prefixed with an underscore to denote to TS that we are aware it is unused.
// When we capture DropExceptions and display them as a custom page, this will change.
export function TestRestfulResponse(response: AxiosResponse | any, success: ((r: AxiosResponse) => (string | void)) | string | undefined, error: ((r: AxiosResponse) => (string | void)) | string | undefined): string | boolean | number {

    if (undefined === response.data?.['ERROR TYPE']
        && (undefined !== response?.data?.rest
            || undefined !== response.data?.created
            || undefined !== response.data?.updated
            || undefined !== response.data?.deleted)) {

        let successReturn: string | undefined | void = 'function' === typeof success ? success?.(response) : success;

        if (typeof successReturn === 'string') {

            toast.success(successReturn, DropVariables.toastOptions);

        }

        // this could end up with bad results for deleting id's === 0
        return response.data.created ?? response.data.updated ?? response.data.deleted ?? true;

    }

    let errorReturn: string | undefined | void = 'function' === typeof error ? error?.(response) : error;

    if (typeof errorReturn === 'string') {

        toast.error(errorReturn, DropVariables.toastOptions);

    }

    return false;


}
