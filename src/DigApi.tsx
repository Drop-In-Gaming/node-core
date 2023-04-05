import classNames from 'classnames';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { clearCache } from 'api/API';
import changed from 'api/hoc/changed';
import getCurrentLoggedInUser from 'api/hoc/getCurrentLoggedInUser';
import { GlobalHistory } from 'api/hoc/GlobalHistory';
import isEdgeBrowser from 'api/hoc/isEdgeBrowser';
import isTest from 'api/hoc/isTest';
import { clearCompetitionCache } from 'api/rest/getCompetitions';
import { iPayoutTable, iTournamentPayoutTable } from 'api/rest/getTournamentPayoutTable';
import ForceLegacyPasswordReset from 'components/ForceLegayPasswordReset/ForceLegacyPasswordReset';
import VerifyAccountTrollBridge from 'components/VerifyAccountTrollBridge/VerifyAccountTrollBridge';
import context, { getStyles } from 'variables/DropVariables';
import DropVariables from 'variables/DropVariables';

import BackendThrowable from 'components/Errors/BackendThrowable';


/** STYLES
 * Moving forward all styles must be css or scss modules
 * @link https://github.com/css-modules/css-modules
 * @link https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
 * @note check out CreateCompetition.tsx for an example
 * The module file naming convention is  [name].module.css
 **/

// import "pace-js/pace.min.js";
// import "assets/css/pace.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-datetime/css/react-datetime.css';
import 'dropzone/dist/dropzone.css';
import 'dropzone/dist/dropzone.js';

import {
    iChatMessages,
    iCompetitions,
    iGame, iGroups, iInvitation, iResult, iTeam,
    iUser, iWpPost
} from 'variables/sharedInterfaces';

import {
    iDig_Comp_Registration, iDig_Features,
    iDig_Subscription_Model, iDig_Vendor
} from 'variables/C6';


import Nest from 'components/Nest/Nest';
import authenticated from 'api/hoc/authenticated';
import TryWebSocket from 'components/WebSocket/TryWebSocket';
import { getBrowserLanguage, iLanguage } from 'variables/supportedLanguages';
import Loading from 'components/Loading/Loading';
import Bricked504 from "components/Troubleshoot/Bricked504";
import { ReactComponent as ComSVG } from 'assets/img/svg/DIG-logo-lockup-beta-horizontal-white.svg';
import { ReactComponent as GgSVG } from 'assets/img/svg/DIG-logo-lockup-horizontal-white-GG.svg';


export interface iDigApiProperties {
    children?: React.ReactNode | React.ReactNode[] | undefined;
}

export type iRegistrations = iDig_Comp_Registration & iDig_Vendor;

export type tStatefulApiData<T> = T[] | undefined | null;

// this refers to the value types of the keys above, aka values in the state
export interface iRestfulObjectArrayTypes {
    users: tStatefulApiData<iUser>,
    teams: tStatefulApiData<iTeam>,
    games: tStatefulApiData<iGame>,
    payoutTable: tStatefulApiData<iPayoutTable>,
    tournamentPayoutTable: tStatefulApiData<iTournamentPayoutTable>,
    competitions: tStatefulApiData<iCompetitions>,
    subscriptions: tStatefulApiData<iDig_Subscription_Model>,
    globalMessages: tStatefulApiData<iChatMessages>,
    invitations: tStatefulApiData<iInvitation>,
    registrations: tStatefulApiData<iRegistrations>,
    vendors: tStatefulApiData<iDig_Vendor>,
    posts: tStatefulApiData<iWpPost>,
    results?: tStatefulApiData<iResult>
    features: tStatefulApiData<iDig_Features>,
    groups: tStatefulApiData<iGroups>
}

export type tRestfulObjectArrayKeys = keyof iRestfulObjectArrayTypes

export type tRestfulObjectArrayValues = iRestfulObjectArrayTypes[tRestfulObjectArrayKeys];

// @ts-ignore
export type tRestfulObjectValues = tRestfulObjectArrayValues[number];

// our central container, single page application is best with the DigApi
export interface iDigApiState extends iRestfulObjectArrayTypes {
    id: number, // user id
    loginPopup: boolean,
    joinPopup: boolean,
    axios: import('axios').AxiosInstance,
    chatInput: string,
    websocketEvents: MessageEvent[],
    websocketData: any[],
    websocket?: WebSocket,
    websocketMounted: boolean,
    alert?: boolean,
    operationActive: boolean,
    colorLocked: boolean,
    authenticating?: boolean,
    darkMode: boolean,
    alertsWaiting: any[],
    bricked504: boolean,
    backendThrowable: any[],
    translateToLanguage: iLanguage | undefined,
    invalidPasswordResetKey: string | undefined
}

export default class DigApi extends React.Component<iDigApiProperties, iDigApiState> {
    static digApi: DigApi;
    static lastLocation = window.location.pathname;

    // @link https://github.com/welldone-software/why-did-you-render
    // noinspection JSUnusedGlobalSymbols
    static whyDidYouRender = true;

    constructor(props) {

        super(props);

        DigApi.digApi = this;

        // This should only ever be done here, when the full state is being trashed.
        clearCache({
            ignoreWarning: true
        });

        clearCompetitionCache();

        /** We can think of our app as having one state; this state.
         * Long-term, I'd like us to store this state to local storage and only load updates on reload...
         * Class based components are far easier to manage state in local storage and pass state down to children.
         * Children, if not faced with a local storage or other complexity should be a functional component. Functional
         * components' tend to be shorter syntactically and bonus points if it's stateless.
         **/
        this.state = {
            id: 0,
            alert: false,
            alertsWaiting: [],
            chatInput: '',
            invalidPasswordResetKey: undefined,
            backendThrowable: [],
            websocketEvents: [],
            websocketData: [],
            axios: context.axios,
            features: undefined,
            groups: undefined,
            payoutTable: undefined,
            tournamentPayoutTable: undefined,
            authenticating: undefined,
            users: undefined,
            teams: undefined,
            websocketMounted: false,
            competitions: undefined,
            websocket: undefined,
            globalMessages: undefined,
            subscriptions: undefined,
            games: undefined,
            invitations: undefined,
            posts: undefined,
            registrations: undefined,
            vendors: undefined,
            translateToLanguage: getBrowserLanguage(),
            bricked504: false,
            colorLocked: true,
            darkMode: true,
            loginPopup: false,
            joinPopup: false,
            operationActive: false
        };

    }

    websocketTimeout = 5000;

    switchDarkAndLightTheme = () => this.setState({ darkMode: !this.state.darkMode }, () => {
        document.body.dataset.theme = this.state.darkMode ? 'dark' : 'light';
    });

    getLoggedInUser = () => this.state.users?.find(user => user.ID === this.state.id);

    shouldComponentUpdate(
        nextProps: Readonly<iDigApiProperties>,
        nextState: Readonly<iDigApiState>,
        _nextContext: any): boolean {

        changed(this.constructor.name, 'props', this.props, nextProps);
        changed(this.constructor.name, 'state', this.state, nextState);

        // this is a conditional to ensure we don't render when the websocket sends an update.
        // we only want to render when a functional callable decides the data is worth rendering in our runtime.
        // A good example is getting your own global message updated through the websocket when we already had the data
        // via ajax. It's easier to do the negative check here than to do the positive check; what shouldn't cause and update,
        // todo - though if updates happen nearly concurrently it will (as it currently seem) be concatenated into one update.
        // todo - this is a good thing, but it means the negative test is not perfect.
        return this.state.websocketEvents?.length === nextState.websocketEvents?.length ||
            this.state.globalMessages?.length !== nextState.globalMessages?.length;
    }

    componentDidMount() {

        if (window.location.hostname === 'localhost') {

            console.log('window.location.hostname === \'localhost\'');

            return;

        }

        if (undefined === this.state.authenticating) {

            authenticated(this);

        }

        TryWebSocket();

    }

    componentDidUpdate(_prevProps: Readonly<iDigApiProperties>, _prevState: Readonly<iDigApiState>, _snapshot?: any) {
        if (DigApi.lastLocation !== location.pathname) {
            DigApi.lastLocation = location.pathname;
            const websocket = this.state.websocket;
            if (websocket?.readyState === WebSocket.OPEN) {
                websocket.send(location.pathname);
                console.log(location.pathname);
            }
        }
    }

    render() {

        const { id } = this.state;

        console.log('BOOTSTRAP TSX RENDER');

        const colorHex = '#' + Math.random().toString(16).slice(-6);

        if (false === this.state.colorLocked) {

            // what a simple way to track re-renders, when the canvas nest changes colors the app was rerender from the root
            document.documentElement.style
                .setProperty('--dig_primary_color', colorHex);

        }

        const color = DropVariables.getPrimaryColor();

        if (DropVariables.isLocal && false === isTest) {

            console.log('color', '(' + color + ')');

        }

        if (this.state.bricked504) {

            return <Bricked504 />;

        }

        const nest = <Nest position={'fixed'} backgroundColor={''} color={DropVariables.hexToRgb(color)} count={100} />;

        if (this.state.backendThrowable.length > 0) {

            return <>
                {nest}
                <BackendThrowable />
            </>;

        }

        const websocket = this.state.websocket;

        if (DropVariables.isLocal) {

            if (websocket?.readyState !== WebSocket.OPEN) {

                return <>
                    {nest}
                    <Loading count={3} message={'Connecting to the websocket for live updates!'} />
                </>;

            }


        }

        const currentUser = getCurrentLoggedInUser();

        if (0 !== this.state.id &&
            (undefined === currentUser ||
                1 === Object.keys(currentUser).length)) {

            return <>
                {nest}
                <Loading count={2} message={'Gathering your information...'} />
            </>;

        }

        const dig = getStyles();

        if (isEdgeBrowser) {

            return <>
                {nest}
                {DropVariables.isGG
                    ? <GgSVG style={{ width: '155px', display: 'flex', fill: color + ' !important' }} />
                    : <ComSVG style={{ width: '204px', display: 'flex', fill: color + ' !important' }} />}
                <div style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>
                    <p className={classNames(dig.center)}>
                        Oh no! Edge does not support the amazing features we have ready for you.
                        Please choose another browser ie. Chrome, Firefox, Safari, Opera, Brave, etc.
                    </p>
                </div>
            </>;

        }

        if (0 !== id) {

            if (this.state.invalidPasswordResetKey !== undefined) {
                return <>
                    {nest}
                    <ForceLegacyPasswordReset />
                </>;
            }

            if (currentUser?.user_status === 0) {

                console.log('currentEditUser', currentUser);

                // todo - make this email or phone number verification
                return <>
                    {nest}
                    <VerifyAccountTrollBridge />
                </>;

            }

        }

        return <BrowserRouter>
            <GlobalHistory />
            {this.props.children}
            <ToastContainer />
        </BrowserRouter>;

    }

}

