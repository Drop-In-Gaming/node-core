import login from "api/hoc/login";

// if you want to add capture user related variables on a global level this is the place to do it.
// look up the this.state.authenticate route and add your data to the response
// it's better to make ids strings, this is cast automatically
import DigApi from "DigApi";

let isRunning = false

export default function authenticated(bootstrap: DigApi): void {

    if (isRunning){
        return
    }

    isRunning = true;

    // setState still has timing issues, the manual flag set isRunning is the best way
    bootstrap.setState({
        authenticating: true
    }, () => {

        // this is not a restful request as its routing is defined explicitly in
        bootstrap.state.axios.get('/authenticated/').then(res => {

            const authenticated = (res?.data?.success) || false;

            const id: number = res.data?.id > 0 ? res.data?.id : 0;

            if (authenticated) {

                login(id)

            }

            bootstrap.setState({
                authenticating: false
            }, () => isRunning = false)

        }).catch(error => {

            bootstrap.setState({
                id: 0,
                authenticating: false
            }, () => isRunning = false);

            if (error.response) {

                console.warn('Authentication error: ', error.response.data);

                //console.log(error.response.data);
                console.log(error.response.status);

                console.log(error.response.headers);

            }

        });

    });

}