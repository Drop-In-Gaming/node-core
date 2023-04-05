import {toast} from "react-toastify";
import getUsers from "api/rest/getUsers";
import DigApi from "DigApi";
import DropVariables from "variables/DropVariables";

export default function login(id): void {

    const bootstrap: DigApi = DigApi.digApi

    if (0 === id) {

        toast.error('An internal error occurred logging in!', DropVariables.toastOptions)

        throw Error('login should never be passed an empty string!');

    }

    bootstrap.setState({
        id: id,
        authenticating: false,
    }, () => {
        getUsers({
            userIds: [
                id
            ],
            cacheResults: false
        })

    })

}

