import DigApi from 'DigApi';
import { toast } from 'react-toastify';

export default function HandleResponseCodes(data: any): void {

    const bootstrap: DigApi = DigApi.digApi;

    interface iAlert {
        intercept?: boolean,
        message?: string,
        title?: string,
        type?: string,
    }

    let handleAlert = (alert: iAlert): void => {

        console.log('===== alert', Object.assign({}, alert));

        if (alert.intercept === false) {
            return; // recursive ending condition
        }

        setTimeout(() => {
            toast.error(alert.message || 'An alert was encountered, but no message could be parsed.');
        });
        console.log('todo - redo alert', alert);

        let alertsWaiting = bootstrap.state.alertsWaiting;

        let nextAlert = alertsWaiting?.pop();

        bootstrap.setState({
            alert: nextAlert !== undefined,
            alertsWaiting: alertsWaiting
        }, () => nextAlert !== undefined && handleAlert(nextAlert));


        // swal({
        //     title: alert.title || 'Danger! You didn\'t set a title in your react alert.',
        //     text: alert.message || 'An alert was encountered, but no message could be parsed.',
        //     icon: alert.type || 'error',
        //     buttons: ['Okay!'],
        //     timer: 5000,
        // }).then(() => {
        //
        //     let alertsWaiting = bootstrap.state.alertsWaiting;
        //
        //     let nextAlert = alertsWaiting?.pop();
        //
        //     bootstrap.setState({
        //         alert: nextAlert !== undefined,
        //         alertsWaiting: alertsWaiting
        //     }, () => nextAlert !== undefined && handleAlert(nextAlert));     // this is another means to end. note: doesn't hurt
        //
        // });

    };

    if (data?.data?.alert) {

        console.log('handleResponseCodes ∈ Bootstrap');

        let stack: Array<iAlert> = data.data.alert;

        if (stack.length === 0) {

            return;

        }

        console.log('stack', stack);


        // an alert box is open, add new alerts to show after current closes
        if (bootstrap.state.alert === true) {

            let alertsWaiting = bootstrap.state.alertsWaiting;

            alertsWaiting.concat(stack);

            bootstrap.setState({

                alertsWaiting: alertsWaiting

            });

            return;

        }

        // no alert is currently open, pull first from stack
        let alert: iAlert | undefined = stack.pop();

        if (undefined === alert) {

            return;

        }

        console.log('alert', Object.assign({}, alert));

        bootstrap.setState({
            alert: true,
            alertsWaiting: stack
        });

        handleAlert(alert);

    }

}
