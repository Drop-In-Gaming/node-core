import {getStyles} from "../App";
import classNames from "classnames";
import {useState} from "react";
import {DropVariables, Input, iUsers, postUser} from "@drop-in-gaming/core";
import Datetime from "react-datetime";
import moment from "moment/moment";
import {iComponentProps} from "../Examples";


export default function RegisterApi({organization_id}: iComponentProps) {

    console.log(organization_id)

    let [userSignUpAndInInformation, setUserSignUpAndInInformation] = useState<iUsers>({})

    let [emailWarningOpened, setEmailWarningOpened] = useState<boolean>(false)

    const changeEmailWarningOpened = () => setEmailWarningOpened(!emailWarningOpened)

    const [today, setToday] = useState(() => moment().format('YYYY-MM-DD'));

    const unregisteredInvite = new URLSearchParams(window.location.search).get('referenceId');


    const dig = getStyles()

    return <div className={classNames(dig.tabPane)} id="register-form" role="tabpanel"
                aria-labelledby="register-tab">
        <div className={classNames(dig.bgTransparent, dig.rounded0, dig.border0)}
             role="form">


            <div
                className={classNames(dig.card, dig.rounded0, dig.border0, dig.bgTransparent)}>
                <div className={classNames(dig.cardBody)}>

                    <Input
                        label={'Username'}
                        required
                        className={classNames(dig.formControl, dig.border0, dig.rounded1)}
                        id="dig-register-username" name="user_login" type="text"
                        placeholder="Enter Username" defaultValue=""
                        onChange={(e) => {
                            setUserSignUpAndInInformation({
                                ...userSignUpAndInInformation,
                                user_login: e.target.value
                            })
                        }}/>


                    <Input
                        label={
                            <>E-mail Address
                                <i className={classNames("fas fa-question-circle")}
                                   id="dig_question_mark_popup"
                                   onMouseEnter={changeEmailWarningOpened}
                                   onMouseLeave={changeEmailWarningOpened}/>
                                {emailWarningOpened && <>
                                    <div
                                        className={classNames("dig_question_mark_popup_text")}>
                                        We will not share your email address with anyone.
                                    </div>
                                </>}
                            </>}
                        className={classNames(dig.formControl, dig.border0, dig.rounded1)}
                        id="dig-register-user-email" name="user_email" type="email"
                        placeholder="Enter your E-mail" defaultValue=""
                        onChange={(e) => {
                            setUserSignUpAndInInformation({
                                ...userSignUpAndInInformation,
                                user_email: e.target.value
                            })
                        }}/>


                    <Input
                        label={'Password'}
                        className={classNames(dig.formControl, dig.border0, dig.rounded1)}
                        id="new_password" name="user_password" type="password"
                        defaultValue=""
                        placeholder="Enter Password"
                        onChange={(e) => {
                            setUserSignUpAndInInformation({
                                ...userSignUpAndInInformation,
                                user_pass: e.target.value
                            })
                        }}/>


                    Birthday
                    <div onClick={() => setToday(today)}
                         className={classNames(dig.formControl, dig.border0, dig.rounded1)}
                         style={{color: 'black'}}>
                        <Datetime
                            dateFormat={DropVariables.momentGeneralDateFormat}
                            initialValue={today}
                            timeConstraints={{
                                hours: {min: 0, max: 72, step: 1}
                            }}
                        />
                    </div>


                </div>
            </div>


            <button
                className={classNames(dig.btn, dig.btnPrimary, dig.btnLg, dig.rounded1, dig.fwBold, dig.border0,
                    dig.w100, dig.textUppercase)}
                type="submit"
                onClick={() => {

                    console.log('join')

                    postUser({

                        user_pass: userSignUpAndInInformation.user_pass,
                        user_login: userSignUpAndInInformation.user_login,
                        user_email: userSignUpAndInInformation.user_email,
                        temp_invite_id: unregisteredInvite ? parseInt(unregisteredInvite) : undefined,
                        success: () => {
                            return 'Account created!'
                        }
                    })


                }}>
                Join
            </button>

        </div>
    </div>
}