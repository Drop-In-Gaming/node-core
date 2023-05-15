import classNames from "classnames";
import {ReactNode} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {getStyles} from "variables/DropVariables";
import DropVariables from "variables/DropVariables";

interface iLoading {
    lineHeight?: number,
    count?: number,
    children?: ReactNode,
    message: string|undefined,
}

export default function Loading(props: iLoading) {

    const dig = getStyles();

    const primaryColor = DropVariables.getPrimaryColor()

    return <div className={classNames(dig.my5, dig.container)} style={{lineHeight: props.lineHeight || 4}}>
        <SkeletonTheme baseColor={primaryColor} highlightColor="#444">
            <Skeleton
                className={classNames(dig.row, dig.mt5, dig.justifyContentCenter, dig.mAuto)}
                count={props.count || 1}
                height={60}
                inline={true}
                style={{
                    marginTop: "10px"
                }}/>
            <br/>
            {props.children}
            {undefined !== props?.message && <h1 style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}>{props?.message}</h1>}
        </SkeletonTheme>
    </div>;

}

