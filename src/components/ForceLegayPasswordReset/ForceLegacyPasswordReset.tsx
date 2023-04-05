import classNames from "classnames";
import {ChangeEvent, useState} from "react";
import {toast} from "react-toastify";
import getCurrentLoggedInUser from "api/hoc/getCurrentLoggedInUser";
import putUser from "api/rest/putUser";
import DigApi from "DigApi";
import Button from "components/Button/Button";
import ExpandableBox from "components/ExpandableBox/ExpandableBox";
import Input from "components/Input/Input";
import {users} from "variables/C6";
import DropVariables, {getStyles} from "variables/DropVariables";
import {ReactComponent as ComSVG} from "assets/img/svg/DIG-logo-lockup-beta-horizontal-white.svg"
import {ReactComponent as GgSVG} from "assets/img/svg/DIG-logo-lockup-horizontal-white-GG.svg"

// todo - add phone validation

export default function ForceLegacyPasswordReset() {

    const [userPasswordA, setUserPasswordA] = useState<string>('')
    const [userPasswordB, setUserPasswordB] = useState<string>('')

    const dig = getStyles()

    return <div className={classNames(dig.container, dig.justifyContentCenter, dig.mt5)}
         style={{color: "white", fontSize: "1.5rem", textAlign: "center"}}>

        <div className={classNames(dig.col6, dig.offset3)}>
            {DropVariables.isGG
                ? <GgSVG style={{width: "100%", display: "flex"}}/>
                : <ComSVG style={{width: "100%", display: "flex"}}/>}
        </div>


        <ExpandableBox>
            <h1 className={dig.textCenter}>Whoa their!</h1>
            <br/>
            <p>
                Looks like we need update you password.
            </p>
            <div className={classNames(dig.col6, dig.offset3)}>
                <Input
                    type="password"
                    id="password_a"
                    value={userPasswordA}
                    placeholder="Enter your new password"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setUserPasswordA(e.target.value)
                    }}
                    regexValidations={users.REGEX_VALIDATION[users.USER_PASS]}
                    className={classNames(dig.col6)}/>
                <Input
                    type="password"
                    id="password_b"
                    value={userPasswordB}
                    placeholder="Confirm your new password"
                    regexValidations={users.REGEX_VALIDATION[users.USER_PASS]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setUserPasswordB(e.target.value)
                    }}
                    className={classNames(dig.col6)}/>

                <Button onClick={() => {

                    if ('' === userPasswordB && '' === userPasswordA) {
                        toast.error('Please enter the required information!', DropVariables.toastOptions);
                        return
                    }

                    if (userPasswordA !== userPasswordB) {
                        toast.error('Passwords do not match!', DropVariables.toastOptions);
                        return
                    }

                    const invalidPasswordResetKey = DigApi.bootstrap.state.invalidPasswordResetKey

                    if (undefined === invalidPasswordResetKey) {
                        toast.error('Invalid password reset key! Please contact support if problems persist.', DropVariables.toastOptions);
                        return
                    }

                    const user = getCurrentLoggedInUser()

                    user && putUser({
                        ID: user.ID,
                        user_pass: userPasswordA,
                        user_activation_key: DigApi.bootstrap.state.invalidPasswordResetKey
                    })

                }}>
                    Reset Password
                </Button>
            </div>
        </ExpandableBox>

</div>

}