import './App.css';
import classNames from "classnames";
import Datetime from 'react-datetime';
import {DropVariables, getStyles, Input, iUsers, postUser} from '@drop-in-gaming/core';
import {useState} from "react";
import moment from "moment/moment";


export default function App() {

  let [userSignUpAndInInformation, setUserSignUpAndInInformation] = useState<iUsers>({})

  let [emailWarningOpened, setEmailWarningOpened] = useState<boolean>(false)

  const changeEmailWarningOpened = () => setEmailWarningOpened(!emailWarningOpened)

  const [today, setToday] = useState(() => moment().format('YYYY-MM-DD'));

  const unregisteredInvite = new URLSearchParams(window.location.search).get('referenceId');

  const dig = getStyles()


    return (
      <div className="App">
        <header className="App-header">
            <div className={classNames(
                dig.tabPane, dig.show, dig.active
            )} id="login-form" role="tabpanel"
                 aria-labelledby="login-tab">
                <div className={classNames(
                    dig.bgTransparent, dig.rounded0, dig.border0,
                )}
                     role="form">
                    <div className={classNames(
                        dig.card, dig.rounded0, dig.border0, dig.bgTransparent
                    )}>
                        <div className={classNames(
                            dig.cardBody, dig.digBgNeutral2
                        )}>
                            <div className={classNames(dig.tabPane)} id="register-form" role="tabpanel"
                                 aria-labelledby="register-tab">
                                <div className={classNames(dig.bgTransparent, dig.rounded0, dig.border0)}
                                     role="form">


                                    <div
                                        className={classNames(dig.card, dig.rounded0, dig.border0, dig.bgTransparent)}>
                                        <div className={classNames(dig.cardBody, dig.borderColorNeutral2)}>

                                            <Input
                                                label={'Username'}
                                                required
                                                className={classNames(dig.formControl, dig.border0, dig.rounded0, dig.borderColorNeutral3,
                                                    dig.fontSize1P2Em)}
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
                                                className={classNames(dig.formControl, dig.border0, dig.rounded0, dig.borderColorNeutral3,
                                                    dig.fontSize1P2Em)}
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
                                                className={classNames(dig.formControl, dig.border0, dig.rounded0, dig.borderColorNeutral3,
                                                    dig.fontSize1P2Em)}
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
                                                 className={classNames(dig.formControl, dig.border0, dig.rounded0, dig.borderColorNeutral3,
                                                     dig.fontSize1P2Em)}
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

                                    <div
                                        className={classNames(dig.rounded0, dig.dFlex, dig.justifyContentCenter, dig.border, dig.mt3)}>
                                        <button
                                            className={classNames(dig.btn, dig.btnPrimary, dig.btnLg, dig.rounded0, dig.fwBold, dig.w100, dig.textUppercase, "dig-btn-green pull-right dig-register font-size-1em")}
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
                            </div>
                        </div>
                    </div>
                </div>



          </div>
        </header>
      </div>
  );
}

