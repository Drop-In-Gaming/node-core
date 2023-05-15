import DropVariables from "variables/DropVariables";


const letUsBeHappyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
};

export default function Bricked504() {
    if (DropVariables.isLocal) {

        return <>
            <br/>
            <h1 style={letUsBeHappyStyle}> 504 - Sorry friend, we are bricked!</h1>
            <h1 style={letUsBeHappyStyle}>Make sure apache is running using (<b>sudo
                apachectl start</b>). Make sure apache is running on both IPV4 and IVP6.</h1>
            <h1 style={letUsBeHappyStyle}>Try the local requested site; be sure it is not overly
                slow causing actual timeouts.</h1>
            <h1 style={letUsBeHappyStyle}>Otherwise this is an unknown issue, programmed around,
                just to tell you to
                restart your computer.</h1>
            <h1 style={letUsBeHappyStyle}>@link
                https://github.com/netlify/create-react-app-lambda/issues/19</h1>
        </>;

    } else {

        const digStyles: CSSStyleDeclaration = DropVariables.getStyles();

        return <>
            <h1 style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }} className={digStyles.textAlign}>
                504 - A critical timeout issue occurred! Try refreshing the page and please contact us if this persists!
            </h1>
        </>

    }
}