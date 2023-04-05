import classNames from "classnames";
import {ReactNode, useEffect, useState} from "react";
import {getStyles} from "variables/DropVariables";

interface iExpandableBox {
    header?: string | ReactNode,
    actions?: ReactNode,
    children?: ReactNode,
    handleCollapse?: () => void,
    startCollapsed?: boolean,
    centered?: boolean,
    transparent?: boolean,
    minWidth?: string
}

export default function ExpandableBox(
    {
        header,
        minWidth,
        children,
        handleCollapse,
        startCollapsed = false,
        centered = false,
        actions,
        transparent = false
    }: iExpandableBox) {

    const [stateCollapsed, setCollapsed] = useState<boolean>(startCollapsed || false)

    useEffect(() => {

        setCollapsed(startCollapsed)

    }, [startCollapsed])

    const dig = getStyles()

    const dropDownToggle = <i
        className={"fas rotate-icon float-right " + (stateCollapsed ? "fa-angle-up" : "fa-angle-down")}
        style={{float: "right"}}/>

    return <div className={classNames(
        dig.card, dig.rounded0, dig.border0, {
            [dig.digBgTransparent]: transparent, [dig.digBgNeutral2]: !transparent
        }
    )} style={{marginTop: "10px"}}>
        {undefined !== header &&
            <div
                onClick={() => {
                    setCollapsed(!stateCollapsed);
                    handleCollapse?.()
                }}
                className={classNames(
                    dig.cardHeader,  dig.border0, dig.m2, {
                        [dig.digBgTransparent]: transparent, [dig.digBgNeutral2]: !transparent
                    }
                )}
                id="tourney-details-label">
                <h3 className={classNames(
                    dig.mb0, dig.cardTitle, dig.digOrange, dig.textStart,
                    dig.borderColorNeutral6, dig.pt1, minWidth
                )}>
                    {header}
                    {actions}
                    {dropDownToggle}
                </h3>
            </div>}

        {stateCollapsed ||
            <div className={classNames(dig.cardBody, {
                [dig.digBgTransparent]: transparent, [dig.digBgNeutral2]: !transparent
            })}>
                <div className={classNames(dig.row, {
                    [dig.justifyContentCenter]: centered
                })}>
                    {children}
                </div>
            </div>
        }
    </div>


}

