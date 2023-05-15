import {toast} from "react-toastify";

// if you want to add capture user related variables on a global level this is the place to do it.
// look up the this.state.authenticate route and add your data to the response
// it's better to make ids strings, this is cast automatically
import DigApi from "DigApi";
import {users} from "variables/C6";
import DropVariables from "variables/DropVariables";

let isRunning = false

export default function forgotPassword({emailAddressOrUsername, userID, userPassword, userPin}:{
    emailAddressOrUsername: string,
    userID: string,
    userPassword: string,
    userPin: string,
}): void {

    if (isRunning) {
        return
    }
    isRunning = true;

    const bootstrap = DigApi.digApi;

    // setState still has timing issues, the manual flag set isRunning is the best way
    // this is not a restful request as its routing is defined explicitly in
    bootstrap.state.axios.post('/bootstrapCustom/forgotPassword/', {
        emailAddressOrUsername: emailAddressOrUsername,
        [users.ID]: userID,
        [users.USER_PASS]: userPassword,
        [users.USER_ACTIVATION_KEY]: userPin,
    }).then(_res => {

        toast.success('' !== userPin? 'We have reset your password! Please login now.' : 'Your password reset email was sent! The reset link will be active for 10 minutes.', DropVariables.toastOptions);

    }).catch(_error => {

        toast.error('Password reset email failed', DropVariables.toastOptions);

    });

}