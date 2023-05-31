import {iAlert} from "components/Alert/Alert";
import DigApi from "DigApi";
import Bootstrap from "DigApi";

export default function HandleResponseCodes(data: any): void {

    const bootstrap: Bootstrap = DigApi.digApi

    if (undefined === data?.data?.alert) {
        return;
    }

    if (Array.isArray(data.data.alert) === false) {

        throw new Error("data.data.alert is not an array (" + JSON.stringify(data.data.alert) + ")");

    }

    console.log("handleResponseCodes ∈ Bootstrap");

    let stack: Array<iAlert> = data.data.alert;

    if (stack.length === 0) {

        return;

    }

    bootstrap.setState(previousState => {

        previousState.alertsWaiting.push(...stack)

        return {

            alertsWaiting: previousState.alertsWaiting

        }
    });

}
