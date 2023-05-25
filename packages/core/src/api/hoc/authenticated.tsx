import getUsers from "api/rest/getUsers";

// if you want to add capture user related variables on a global level this is the place to do it.
// look up the this.state.authenticate route and add your data to the response
// it's better to make ids strings, this is cast automatically
import Bootstrap from "DigApi";

let isRunning = false

export default function authenticated(): void {

    const bootstrap: Bootstrap = Bootstrap.digApi;

    if (isRunning) {
        return
    }

    isRunning = true;

    // setState still has timing issues, the manual flag set isRunning is the best way
    bootstrap.setState({
        authenticating: true
    }, () => {

        // this is not a restful request as its routing is defined explicitly in
        bootstrap.state.axios.get('/bootstrapCustom/authenticated/').then(res => {

            const authenticated = (res?.data?.success) || false;

            const receivedId = res.data?.id ?? res.data?.ID ?? 0

            const id: number = receivedId > 0 ? receivedId : 0;

            bootstrap.setState({
                id: id,
                authenticating: false
            }, () => {

                if (authenticated) {

                    getUsers({
                        userIds: [
                            id
                        ],
                        cacheResults: false
                    })

                }

                isRunning = false

            })

        }).catch(error => {

            if (error.response) {

                console.warn('Authentication error: ', error.response.data);

                //console.log(error.response.data);
                console.log(error.response.status);

                console.log(error.response.headers);

            } else {

                console.log(error)

                console.trace()

            }

            bootstrap.setState({
                id: 0,
                authenticating: false
            }, () => isRunning = false);

        });

    });

}