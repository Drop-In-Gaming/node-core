import classNames from "classnames";
import {ChangeEvent, useState} from "react";
import {toast} from "react-toastify";
import getCurrentLoggedInUser from "api/hoc/getCurrentLoggedInUser";
import putUser from "api/rest/putUser";
import ExpandableBox from "components/ExpandableBox/ExpandableBox";
import Input from "components/Input/Input";
import Loading from "components/Loading/Loading";
import DropVariables, {getStyles} from "variables/DropVariables";

import {ReactComponent as ComSVG} from "assets/img/svg/DIG-logo-lockup-beta-horizontal-white.svg"
import {ReactComponent as GgSVG} from "assets/img/svg/DIG-logo-lockup-horizontal-white-GG.svg"

export default function VerifyAccountTrollBridge() {

    const currentUser = getCurrentLoggedInUser()

    const [userEmail, setUserEmail] = useState<string | undefined>(currentUser?.user_email)

    const [sending, setSending] = useState<boolean>(false)

    const [sent, setSent] = useState<boolean>(false)

    const dig = getStyles()


    let boxContent: JSX.Element = <></>

    if (sent) {
        boxContent = <>Email sent!</>
    } else if (sending) {
        boxContent = <Loading message={'We are processing your request now!'}/>
    } else {
        boxContent = <>
            <h1 className={dig.textCenter}>Oh no!</h1>
            <br/>
            <p>
                Looks like we need to verify your email address.
            </p>
            <div className={classNames(dig.col6, dig.offset3)}>
                <Input type={"email"}
                       value={currentUser?.user_email}
                       label={'You may update the current email below!'}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           setUserEmail(e.target.value)
                       }}/>
                After you have verified your email above is correct, you may continue to{' '}
                <a href={'#'}
                   style={{color: "var(--dig_primary_color)"}}
                   onClick={async (event) => {

                       if (undefined === currentUser) {

                           toast.error('You must be logged in to verify your email address. Please contact support if problems persist.')

                           return;

                       }

                       const target = event.target as HTMLElement;

                       target.innerHTML = 'Sending, please be patient!';

                       target.onclick = null;

                       setSending(true)

                       const response = await putUser({
                           ID: currentUser?.ID,
                           user_email: userEmail
                       })

                       if (null === response || undefined === response) {

                           toast.error('An error occurred while sending the verification email. Please contact support if problems persist.', DropVariables.toastOptions)

                           return;

                       }

                       if ('object' === typeof response && response.data.updated) {

                           // todo - enumn?
                           setSending(false)
                           setSent(true)

                       }

                   }}>
                    send the verification link!
                </a>
            </div>
        </>
    }


    return <div className={classNames(dig.container, dig.justifyContentCenter, dig.mt5)}
                style={{color: "white", fontSize: "1.5rem", textAlign: "center"}}>

        <div className={classNames(dig.col6, dig.offset3)}>
            {DropVariables.isGG
                ? <GgSVG style={{width: "100%", display: "flex"}}/>
                : <ComSVG style={{width: "100%", display: "flex"}}/>}
        </div>


        <ExpandableBox>

            {boxContent}

        </ExpandableBox>

    </div>
}