import classNames from "classnames";
import {Button, Input, mergeStyles} from '@drop-in-gaming/core';
import {useState} from "react";
import Styles from 'src/App.module.scss';
import Bootstrap from 'src/bootstrap.module.scss';
// import {CodeBlock} from "react-code-blocks";
import {CodeBlock, googlecode} from 'react-code-blocks';
import Examples from "src/Examples";


import Root from '!!raw-loader!./index.tsx';

import "react-datetime/css/react-datetime.css";
import "@drop-in-gaming/core/style.css";

type tBasicStyles = (typeof Styles)

type tBootstrap = (typeof Bootstrap)

const styles = mergeStyles(Styles, Bootstrap)

export function getStyles<iCSS extends {}>(overrides: iCSS = {} as iCSS): tBasicStyles & tBootstrap & iCSS {

    if (0 === Object.keys(overrides).length) {

        return styles as (tBasicStyles & tBootstrap & iCSS)

    }

    return mergeStyles(styles, overrides)

}

export const codeBlock = (markdown: String, highlight: String = "", language: String = "typescript") => {
    return <CodeBlock
        text={markdown}
        language={language}
        showLineNumbers={true}
        theme={googlecode}
        highlight={highlight}
    />
};

export default function App() {

    const [exampleIndex, _setExampleIndex] = useState<number>(0);

    const [organizationId, setOrganizationId] = useState<number>(0);

    const [toggle, setToggle] = useState<boolean>(false);

    const dig = getStyles();

    const example = Examples.find((_example, index) => index === exampleIndex)

    if (example === undefined) {
        return <h3>Could not find component - todo make this better</h3>
    }

    const Component = example.component;

    const ExampleCode = example.exampleCode;

    return (

            <div className={classNames(dig.App)}>
                <header className={classNames(dig.appHeader)}>
                    <div className={classNames(
                        dig.container, dig.my5, dig.py5,
                        dig.px5, dig.textWhite
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
                                    dig.cardBody, dig.w75, dig.mxAuto
                                )}>
                                    <h1 className={classNames(dig.mx3)}>Drop-In Gaming Documentation</h1>
                                    <br/>
                                    <h2>Use this page to interface with our non-production servers{' '}
                                        <a target={'_blank'} href={'https://preprod.dropingaming.pro/'}>
                                            https://preprod.dropingaming.pro/
                                        </a>
                                    </h2>
                                    <br/>
                                    <h3>Installation & Requirements</h3>
                                    <p>
                                        To use the Drop-In Gaming API, you can install using npm command:
                                        {codeBlock('npm install @drop-in-gaming/core')}
                                        Then wrap your application in out <b>DigApi</b> component.{' '}
                                        {codeBlock("<DigApi apiKey={'1'} organizationId={'1'} tld={'pro'} subdomain={'preprod'}>")}
                                        You can import <b>DigApi</b> using <b>@drop-in-gaming/core</b>.{' '}
                                        {codeBlock('import {DigApi} from \'@drop-in-gaming/core\'; ')}
                                        The apiKey (currently just organization Id) and organizationId are required.
                                        For production use please change the subdomain to &quot;<b>www</b>&quot;. Our peer
                                        dependencies include:
                                        {codeBlock(JSON.stringify({
                                            "peerDependencies": {
                                                "axios": "^1.3.4",
                                                "axios-cache-adapter": "^2.7.3",
                                                "bootstrap": "5.2.3",
                                                "classnames": "^2.3.2",
                                                "dangerously-set-html-content": "^1.0.9",
                                                "deepmerge": "^4.2.2",
                                                "dropzone": "^5.7.1",
                                                "history": "^5.3.0",
                                                "json": "11.0.0",
                                                "moment-timezone": "^0.5.43",
                                                "qs": "^6.11.1",
                                                "react": "^18.2.0",
                                                "react-dom": "^18.2.0",
                                                "react-loading-skeleton": "^3.2.0",
                                                "react-outside-click-handler": "^1.3.0",
                                                "react-router-dom": "^6.10.0",
                                                "react-toastify": "^9.1.2"
                                            }
                                        }, null, 2))} If you already use <b>react-router-dom</b> by means of:
                                        {codeBlock('<BrowserRouter />')} If <b>SHOULD</b> be replaced with our <b>{'<DigApi /> '}</b>
                                        component as DigApi returns the following:
                                        {codeBlock('return <BrowserRouter><GlobalHistory />{this.props.children}<ToastContainer /></BrowserRouter>;')}
                                        This example app imports our Rest API in the index.tsx file:
                                        {codeBlock(Root)}
                                    </p>

                                    <br/>
                                    <h2>Live Demo&apos;s</h2>

                                    <h3>Step #1</h3>

                                    <p>
                                        Obtain an organization ID from Drop-In Gaming&apos;s IAM. Approval is required
                                        so you
                                        may first need to <a target={'_blank'} href={'https://www.dropingaming.pro/support/'}>contact
                                        us</a>.
                                        Anyone is allowed to interface with our API by using the Drop-In Gaming
                                        <b> Organization ID: 1</b> on <b><a target={'_blank'} href={'https://preprod.dropingaming.com/'}>NON-Production</a></b>. Drop-In Gaming is a public
                                        organization that
                                        all our members belong to, so that anyone can is able to test our
                                        (non-production) API.
                                    </p>

                                    <Input
                                        label={'Organization Key'}
                                        required
                                        className={classNames(dig.formControl, dig.border0, dig.rounded1)}
                                        id="dig-register-username" name="user_login" type="text"
                                        placeholder="Enter Username"
                                        onChange={(event) => {

                                            setOrganizationId(event.target.value)

                                        }}/>

                                    <br/>
                                    <h3>Step #2</h3>

                                    <p>
                                        Use the organization ID to test the API. You can use the following example(s) to
                                        test
                                        basic registration. Fake and/or example emails maybe used at no risk as our
                                        non-production
                                        environment is not connected to any real email service; more information on this
                                        in step #3.
                                        More examples will be added in the future. Complete the form below
                                        and click the submit button to test the API. This examples source code for the
                                        example is
                                        available by selecting the &quot;View Code&quot; button or view
                                        the
                                        the full source by visiting our{' '}
                                        <a target={'_blank'} href={'https://github.com/Drop-In-Gaming/node-core'}>
                                            GitHub
                                        </a>. This repository is public and open source, but expected to change
                                        locations
                                        soon.
                                    </p>

                                    <Button
                                        onClick={() => setToggle(!toggle)}
                                        className={classNames(dig.btn, dig.btnPrimary, dig.my3)}
                                    >
                                        {toggle ? "View Component" : "View Code"}
                                    </Button>


                                    {!toggle && <Component organization_id={organizationId}/>}


                                </div>


                                <div className={classNames(dig.w100, dig.mAuto)}>
                                    {toggle && codeBlock(ExampleCode)}
                                </div>


                                <div className={classNames(
                                    dig.cardBody, dig.w75, dig.mxAuto
                                )}>
                                    <br/>
                                    <h3>Step #3</h3>

                                    <p>
                                        Finally, see the generated email captured in{' '}
                                        <a target={'_blank'} href={'https://preprod.dropingaming.pro/mailhog/'}>
                                            our MailHog server
                                        </a> and conveniently proxy it back to our developers and you. Special thanks to
                                        the <a target={'_blank'} href={'https://github.com/mailhog/MailHog'}>{' '}
                                        open source MailHog project
                                    </a>{' '}
                                        members for making this possible. You can verify members are created in the{' '}
                                        <a target={'_blank'} href={'https://preprod.dropingaming.pro/iam/'}>IAM page</a> or if your using the public org key you can see all
                                        users on <a href={'https://preprod.dropingaming.pro/community/'}>the community page</a>.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
            </div>
    );
}

