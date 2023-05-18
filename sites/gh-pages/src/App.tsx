import classNames from "classnames";
import {Button, Input, mergeStyles} from '@drop-in-gaming/core/';
import {useState} from "react";
import Styles from 'src/App.module.scss';
import Bootstrap from 'src/bootstrap.module.scss';
// import {CodeBlock} from "react-code-blocks";
import {CodeBlock, dracula, googlecode} from 'react-code-blocks';
import Examples from "src/Examples";

import "react-datetime/css/react-datetime.css";

type tBasicStyles = (typeof Styles)

type tBootstrap = (typeof Bootstrap)

const styles = mergeStyles(Styles, Bootstrap)

export function getStyles<iCSS extends {}>(overrides: iCSS = {} as iCSS): tBasicStyles & tBootstrap &  iCSS {

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
        <div className={classNames(dig.App)}>
            <header className={classNames(dig.appHeader)}>
                <div className={classNames(
                    dig.container, dig.my5, dig.py5, dig.px5, dig.textWhite
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
                                <h3 className={classNames(dig.mx3)}>Drop-In Gaming Documentation</h3>

                                <h3></h3>

                                <Input
                                    label={'Organization Key'}
                                    required
                                    className={classNames(dig.formControl, dig.border0, dig.rounded1)}
                                    id="dig-register-username" name="user_login" type="text"
                                    placeholder="Enter Username"
                                    value={organizationId}
                                    onChange={(event) => {

                                        setOrganizationId(event.target.value)

                                    }}/>

                                <Button
                                    onClick={() => setToggle(!toggle)}
                                    className={classNames(dig.btn, dig.btnPrimary, dig.my3)}
                                >
                                    {toggle ? "View Component" : "View Code"}
                                </Button>


                                {!toggle && <Component organization_id={organizationId} />}
                            </div>

                             <div className={classNames(dig.w100, dig.mAuto)}>
                                {toggle && codeBlock(ExampleCode)}
                             </div>


                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

