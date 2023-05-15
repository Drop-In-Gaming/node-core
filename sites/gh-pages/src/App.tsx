import './App.css';
import Datetime from 'react-datetime';
import {DropVariables, iUsers, postUser} from '@drop-in-gaming/core';
import {useState} from "react";
import moment from "moment/moment";


function App() {

  let [userSignUpAndInInformation, setUserSignUpAndInInformation] = useState<iUsers>({})

  let [emailWarningOpened, setEmailWarningOpened] = useState<boolean>(false)

  const changeEmailWarningOpened = () => setEmailWarningOpened(!emailWarningOpened)

  const [today, setToday] = useState(() => moment().format('YYYY-MM-DD'));

  const unregisteredInvite = new URLSearchParams(window.location.search).get('referenceId');


  return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          {/*<p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*>*/}
          {/*    Learn React*/}
          {/*</a>*/}
          <div id="login-form" role="tabpanel"
               aria-labelledby="login-tab">
            <div
                role="form">
              <div>
                <div>
                  <div
                      id="register-form" role="tabpanel"
                      aria-labelledby="register-tab">
                    <div role="form">


                      <label>UserName</label>
                      <input
                          required
                          id="dig-register-username" name="user_login" type="text"
                          placeholder="Enter Username" defaultValue=""
                          onChange={(e) => {
                            setUserSignUpAndInInformation({
                              ...userSignUpAndInInformation,
                              user_login: e.target.value
                            })
                          }}/>

                      <label>{
                        <>E-mail Address
                          <i id="dig_question_mark_popup"
                             onMouseEnter={changeEmailWarningOpened}
                             onMouseLeave={changeEmailWarningOpened}/>
                          {emailWarningOpened && <>
                            <div>
                              We will not share your email address with anyone.
                            </div>
                          </>}
                        </>}</label>

                      <input
                          id="dig-register-user-email" name="user_email" type="email"
                          placeholder="Enter your E-mail" defaultValue=""
                          onChange={(e) => {
                            setUserSignUpAndInInformation({
                              ...userSignUpAndInInformation,
                              user_email: e.target.value
                            })
                          }}/>

                      <label>Password</label>
                      <input
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
                           style={{color: 'black'}}>
                        <Datetime
                            dateFormat={DropVariables.momentGeneralDateFormat}
                            initialValue={today}
                            timeConstraints={{
                              hours: {min: 0, max: 72, step: 1}
                            }}
                        />
                      </div>

                      {/*<label>How Did You Hear About Us?</label>*/}
                      {/*<select  name="referral-source"*/}
                      {/*        id="referral-source"*/}
                      {/*        options={[*/}
                      {/*            {value: 'None'},*/}
                      {/*            {value: 'Twitch'},*/}
                      {/*            {value: 'Twitter'},*/}
                      {/*            {value: 'Instagram'},*/}
                      {/*            {value: 'FaceBook'},*/}
                      {/*            {value: 'YouTube'},*/}
                      {/*            {value: 'Referral'},*/}
                      {/*            {value: 'Other'},*/}
                      {/*        ]}*/}
                      {/*        aria-hidden="true">*/}
                      {/*</select>*/}

                      {/*<input label={'Referral Code'}*/}
                      {/*       defaultValue={''}*/}
                      {/*       type="text"/>*/}

                      {/*<input label={'Source'}*/}
                      {/*       type="text"*/}
                      {/*       defaultValue={""}/>*/}


                    </div>
                  </div>

                  <div>
                    <button
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
        </header>
      </div>
  );
}

export default App;
