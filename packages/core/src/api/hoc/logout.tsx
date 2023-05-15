import {AxiosResponse} from "axios";
import {toast} from "react-toastify";
import DigApi from "DigApi";
import DropVariables from "variables/DropVariables";

export default async function logout(userDeleted = false): Promise<null|AxiosResponse<any>> {

    const bootstrap = DigApi.digApi;

    if (0 === bootstrap.state.id) {

        toast.error('Failed to change the logged in status! Please contact Drop-In Gaming if problems persist.', DropVariables.toastOptions)

        return null;

    }

    bootstrap.setState({
        id: 0,
        websocketEvents: [],
        websocketData: [],
        alertsWaiting: [],
    });

    const clearCookies = () => document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

    if (false === userDeleted) {

        let promise = await bootstrap.state.axios.get('/logout/');

        clearCookies();

        return promise;

    }

    clearCookies();

    return null;

}