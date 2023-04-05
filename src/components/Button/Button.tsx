import classNames from "classnames";
import React, {MouseEvent} from "react";
import {Link} from "react-router-dom";
import {getStyles} from "@drop-in-gaming/core/src/variables/DropVariables";

import styleOverrides from "./style.module.scss"

interface iButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    children?: React.ReactNode | React.ReactNode[] | undefined;
    isSelectable?: boolean,
    isSelected?: boolean,
    to?: string,
    href?: string,
    ref?: any,
    label?: string | undefined | React.ReactNode,
}

export default function Button(props: iButton) {

    const {
        id,
        type = "button",
        children,
        onClick,
        isSelectable = false,
        isSelected = false,
        className,
        to,
        href,
        label
    } = props;

    if (undefined !== to && undefined !== href) {
        throw Error('Can not have both the to and href property on Button component')
    }


    let buttonProps = {...props}

    if (undefined !== to || undefined !== href) {

        buttonProps.id = undefined

    }

    const dig = getStyles(styleOverrides);

    buttonProps.label = undefined;

    let buttonComponent = <button
        style={{minHeight: '3em'}}
        {...buttonProps}
        className={classNames(
            dig.dFlex,
            dig.alignItemsCenter,
            dig.justifyContentCenter,
            dig.bgButtonDefault,
            {
                [dig.selectable]: isSelectable,  // hollows the button with a primary color border
                [dig.digSelector]: isSelectable,
                [dig.selected]: isSelectable && isSelected // add a checkmark to the button with a background
            },
            className
        )}
        type={type}
        onClick={(event) => {
            onClick?.(event)
        }}>
        <div>
            {children}
        </div>
    </button>


    if (undefined !== to) {

        buttonComponent = <Link to={to} id={id} className={className}>{buttonComponent}</Link>

    }

    if (undefined !== href) {

        buttonComponent = <a href={href} id={id} className={className}>{buttonComponent}</a>

    }
    const fullRow = (element) => <div className={dig.row}>
        <div className={dig.col12}>{element}</div>
    </div>

    const labelBody = label
        ? fullRow(<label className={dig.m3}>
            <h2 className={classNames(dig.ggSettingsLabel, dig.textStart, dig.fwNormal)}>{label}</h2>
        </label>)
        : null

    return <>
        {labelBody}
        {buttonComponent}
    </>

}
