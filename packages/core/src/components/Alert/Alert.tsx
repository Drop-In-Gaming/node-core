import classNames from "classnames";
import DigApi from "DigApi";
import {ReactNode} from "react";
import getCurrentLoggedInUser from "api/hoc/getCurrentLoggedInUser";
import Popup from "components/Popup/Popup";
import DropVariables, {getStyles} from "variables/DropVariables";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//  'digBtnBlue': string;
//   'digBtnGreen': string;
//   'digBtnLightRed': string;
//   'digBtnRed': string;
export interface iAlertButtonOptions {
    text: string,
    value?: string,
    className?: string,
    color: "default" | "primary" | "secondary" | "inherit" | "danger" | "info" | "success" | "warning" | undefined,
}

export function addAlert(props: iAlert) {

    DigApi.digApi.setState(previousState => ({
        alertsWaiting: previousState.alertsWaiting.length === 0
            ? [props]
            : [...previousState.alertsWaiting, props]
    }))

}

export interface iAlert {
    title: string,
    text: string,
    component?: ReactNode,
    icon?: "warning" | "error" | "success" | "info" | "question" | null,
    buttons?: (iAlertButtonOptions)[] | undefined, //['No thanks!', 'Yes, Delete it'],
    dangerMode?: true,
    then?: (value: string | undefined) => void,
    timeout?: number,
    footerText?: string,

    intercept?: boolean,
    backendThrowable?: { [key: string]: any },
}

export default function Alert() {

    const {alertsWaiting, backendThrowable} = DigApi.digApi.state

    let alert: iAlert | undefined = undefined;

    const alertWaiting = alertsWaiting.length + backendThrowable.length

    if (backendThrowable.length !== 0) {

        const buttons: iAlertButtonOptions[] = [{
            text: 'Close',
            color: 'danger',
        }];

        const hideExpandInformation = true === DropVariables.isProduction && false === (getCurrentLoggedInUser())?.user_is_admin

        if (false === hideExpandInformation) {
            buttons.push({
                text: 'Expand',
                color: 'primary',
            })
        }

        const backendThrowable = DigApi.digApi.state.backendThrowable[0]

        alert = {
            title: "Oh no! An issue occurred!",
            text: backendThrowable?.['DropInGaming\\PHP\\Errors\\DropException'] ?? 'An unknown issue occurred. Please try again.',
            timeout: 0,
            footerText: hideExpandInformation ? '' : 'These alert footer options are only shown to admins and in development environments. Click "Expand" to see more details.',
            buttons: buttons,
            // backendThrowable has its own custom component that can be expanded (called in the Bootstrap component)
            // our then function will be called when the user clicks on the button providing the option to expand or close
            backendThrowable: backendThrowable,
            then: (value: string | undefined) => {

                if (value === 'Expand') {

                    DigApi.digApi.setState(previousState => {

                        let backendThrowable = previousState.backendThrowable.pop()

                        if (backendThrowable === undefined) {
                            return {
                                backendThrowable: []
                            }
                        }

                        backendThrowable.expanded = true

                        return {
                            backendThrowable: [backendThrowable, ...(previousState.backendThrowable ?? [])]
                        }
                    })

                } else {
                    DigApi.digApi.setState(previousState => ({
                        backendThrowable: previousState.backendThrowable.slice(1)
                    }))
                }
            }
        }

    } else if (alertsWaiting.length !== 0) {

        alert = alertsWaiting[0]

    }

    if (alert === undefined) {

        return null

    }

    const timeout = alert?.timeout || 15000

    const bootstrap = DigApi.digApi

    const dig = getStyles()

    let cancelTimeout: any = null

    const handleClose = () => {
        if (null !== cancelTimeout) {
            clearTimeout(cancelTimeout)
        }

        if (alert?.backendThrowable === undefined) {
            bootstrap.setState(previousState => ({
                alertsWaiting: previousState.alertsWaiting.slice(1)
            }))
        }

    }

    if (alert?.intercept === false) {
        handleClose()
        return null
    }

    if (0 !== timeout) {

        cancelTimeout = setTimeout(() => {
            handleClose()
        }, timeout)

    }

    return <Popup handleClose={handleClose}>
        <div className={classNames("model-content", dig.rounded0, dig.border0)} style={{
            maxWidth: '75vw',
            maxHeight: '75vh',
        }}>
            <div className={classNames(dig.modalHeader, dig.rounded0, dig.border0, {
                // icon?: "warning" | "error" | "success" | "info" | "question"
                [dig.digBgCardHeader]: "info" === alert.icon || alert.icon === undefined || alert.icon === null,
                [dig.digBgDarkgreen]: "success" === alert.icon,
                [dig.digBgOrange]: "warning" === alert.icon,
                [dig.digBgOrange]: "error" === alert.icon, // TODO - change to red
                [dig.bgPrimary]: "question" === alert.icon,
            })}>
                <h3 className={classNames(dig.modalTitle, dig.textDark)} id="staticBackdropLabel">
                    #{alertWaiting} {alert.title}
                </h3>
                <div onClick={handleClose}>
                    <FontAwesomeIcon
                        style={{color: DropVariables.getPrimaryColor()}}
                        icon={faClose}
                        size={'xl'}/>
                </div>
            </div>
            <div className={classNames(dig.modalBody, dig.border0, dig.digBgNeutral8, dig.digTextWhite)}>
                <div className={dig.textCenter}>
                    {alert.text}
                    {alert.component}
                </div>
            </div>
            {undefined !== alert.buttons &&
                <div className={classNames(dig.modalFooter, dig.digBgNeutral7, dig.border0, dig.rounded0)}>
                    {alert.footerText && <div className={classNames(dig.textCenter, dig.digTextWhite)}>{alert.footerText}</div>}

                    {alert.buttons?.map((button: iAlertButtonOptions, index: number) => {

                        return <button key={index}
                                       className={classNames(dig.btn, dig.btnLg, {
                                           // todo - color: "default" | "primary" | "secondary" | "inherit" | "danger" | "info" | "success" | "warning" | undefined,
                                           [dig.digBtnGreen]: "success" === button.color,
                                           [dig.digBtnRed]: "danger" === button.color,
                                           [dig.digBtnBlue]: "primary" === button.color,
                                           [dig.digBtnLightRed]: "warning" === button.color,
                                       }, "btn-Yes", dig.rounded0)}
                                       onClick={() => {
                                           handleClose()
                                           alert?.then?.(button.value ?? button.text)
                                       }}>{button.text}</button>

                    })}

                </div>}
        </div>
    </Popup>


}