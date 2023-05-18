import classNames from "classnames";
import Datetime from 'react-datetime';
import {DropVariables, Input, iUsers, postUser, mergeStyles} from '@drop-in-gaming/core';
import {useState} from "react";
import moment from "moment/moment";
import Styles from 'src/App.module.scss';
import Bootstrap from 'src/bootstrap.module.scss';
// import {CodeBlock} from "react-code-blocks";
import {CodeBlock, dracula, googlecode} from 'react-code-blocks';
import CodeExamples from 'src/Examples'



type tBasicStyles = (typeof Styles)

type tBootstrap = (typeof Bootstrap)

const styles = mergeStyles(Styles, Bootstrap)

export function getStyles<iCSS extends {}>(overrides: iCSS = {} as iCSS): tBasicStyles & tBootstrap &  iCSS {

    if (0 === Object.keys(overrides).length) {
        return styles as (tBasicStyles & tBootstrap & iCSS)
    }

    return mergeStyles(styles, overrides)

}


export default function App() {

    let [userSignUpAndInInformation, setUserSignUpAndInInformation] = useState<iUsers>({})

    let [emailWarningOpened, setEmailWarningOpened] = useState<boolean>(false)

    const changeEmailWarningOpened = () => setEmailWarningOpened(!emailWarningOpened)

    const [today, setToday] = useState(() => moment().format('YYYY-MM-DD'));

    const unregisteredInvite = new URLSearchParams(window.location.search).get('referenceId');

    const dig = getStyles()

    const codeBlock = (markdown: String, highlight: String = "", language: String = "typescript", dark: boolean = true) => {
        return <CodeBlock
            text={markdown}
            language={language}
            showLineNumbers={true}
            theme={dark ? dracula : googlecode}
            highlight={highlight}
        />
    };

    return (
        <div className={classNames(dig.App)}>
            <header className={classNames(dig.appHeader)}>
                <div className={classNames(
                    dig.container, dig.my5, dig.py5, dig.px5, dig.textWhite, dig.textCenter
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
                                dig.cardBody
                            )}>
                                <div className={classNames(dig.tabPane)} id="register-form" role="tabpanel"
                                     aria-labelledby="register-tab">
                                    <div className={classNames(dig.bgTransparent, dig.rounded0, dig.border0)}
                                         role="form">


                                        <div
                                            className={classNames(dig.card, dig.rounded0, dig.border0, dig.bgTransparent)}>
                                            <div className={classNames(dig.cardBody)}>

                                                <Input
                                                    label={'Username'}
                                                    required
                                                    className={classNames(dig.formControl, dig.border0, dig.rounded0)}
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
                                                    className={classNames(dig.formControl, dig.border0, dig.rounded0)}
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
                                                    className={classNames(dig.formControl, dig.border0, dig.rounded0)}
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
                                                     className={classNames(dig.formControl, dig.border0, dig.rounded0)}
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
                                                className={classNames(dig.btn, dig.btnPrimary, dig.btnLg, dig.rounded0, dig.fwBold,
                                                    dig.btnSecondary,
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

                                        <div>{codeBlock(CodeExamples.APP)}</div>

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

