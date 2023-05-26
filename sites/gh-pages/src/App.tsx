import classNames from "classnames";
import {Button, DigApi, Input, mergeStyles} from '@drop-in-gaming/core';
import {useState} from "react";
import Styles from 'src/App.module.scss';
import Bootstrap from 'src/bootstrap.module.scss';
// import {CodeBlock} from "react-code-blocks";
import {CodeBlock, dracula, googlecode} from 'react-code-blocks';
import Examples from "src/Examples";

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

export const codeBlock = (markdown: String, highlight: String = "", language: String = "typescript", dark: boolean = true) => {
    return <CodeBlock
        text={markdown}
        language={language}
        showLineNumbers={true}
        theme={dark ? dracula : googlecode}
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
        <DigApi apiKey={"1"} organizationId={'1'} tld={'pro'} subdomain={'preprod'}>
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
                                    dig.cardBody, dig.w50, dig.mxAuto
                                )}>
                                    <h1 className={classNames(dig.mx3)}>Drop-In Gaming Documentation</h1>
                                    <br/>
                                    <h2>Use this page to interface with our non-production servers{' '}
                                        <a href={'https://preprod.dropingaming.pro/'}>
                                            https://preprod.dropingaming.pro/
                                        </a>
                                    </h2>

                                    <h3>Step #1</h3>

                                    <p>
                                        Obtain an organization ID from Drop-In Gaming&apos;s IAM. Approval is required
                                        so you
                                        may first need to <a href={'https://www.dropingaming.pro/support/'}>contact
                                        us</a>.
                                        Anyone is allowed to interface with our API by using the Drop-In Gaming
                                        <b> Organization ID: 1</b> on <b>NON-Production</b>. Drop-In Gaming is a public
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

                                    <h3>Step #2</h3>

                                    <p>
                                        Use the organization ID to test the API. You can use the following example(s) to
                                        test
                                        basic registration. Fake and/or example emails maybe used at no risk as our
                                        non-production
                                        environment is not connected to any real email service; more information on this
                                        in step #3.
                                        More examples will be added in the future. Complete the form below
                                        and click the submit button to test the API. This examples source code for the example is
                                        available by selecting the &quot;View Code&quot; button or view
                                        the
                                        the full source by visiting our{' '}
                                        <a href={'https://github.com/Drop-In-Gaming/node-core'}>
                                            GitHub
                                        </a>. This repository is public and open source, but expected to change locations
                                        soon.
                                    </p>

                                    <Button
                                        onClick={() => setToggle(!toggle)}
                                        className={classNames(dig.btn, dig.btnPrimary, dig.my3)}
                                    >
                                        {toggle ? "View Component" : "View Code"}
                                    </Button>


                                    {!toggle && <Component organization_id={organizationId}/>}
                                    

                                    <br/>
                                    <h3>Step #3</h3>

                                    <p>
                                        Finally, see the generated email captured in{' '}
                                        <a href={'https://preprod.dropingaming.pro/mailhog/'}>
                                            our MailHog server
                                        </a> and conveniently proxy it back to our Developers and you. Special thanks to
                                        the <a href={'https://github.com/mailhog/MailHog'}>
                                        open source MailHog project
                                    </a>
                                        members for making this possible. You can verify members are created in the{' '}
                                        <a href={''}>IAM page</a> or if your using the public org key you can see all
                                        users on <a href={''}>the community page</a>.
                                        It&apos;s
                                        important to note our developers will be
                                        actively working on this project and may delete captured emails at any time.
                                        Moreover, our test servers are regularly (~weekly) reset and all data is
                                        refreshed.
                                        We currently have no SOA, though if a server is undergoing a database reset we
                                        expect only 2-3 minute window is expected to cause downtime. This may also cause
                                        unexpected behavior in the API.
                                    </p>


                                </div>

                                <div className={classNames(dig.w100, dig.mAuto)}>
                                    {toggle && codeBlock(ExampleCode)}
                                </div>


                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </DigApi>
    );
}

