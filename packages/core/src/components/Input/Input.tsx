import {faSquare, faSquareCheck, faCircleDot, faCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, {ChangeEvent, HTMLInputTypeAttribute, ReactNode, useState} from "react";
import {ModifyDeep} from "api/API";
import Tooltip from "components/Tooltip/Tooltip";
import {RegExpMap} from "variables/C6";
import {getStyles} from "variables/DropVariables";


type iInput = ModifyDeep<React.InputHTMLAttributes<HTMLInputElement>, {
    type: HTMLInputTypeAttribute,
    label?: string | undefined | React.ReactNode,
    children?: React.ReactNode | React.ReactNode[],
    regexValidations?: RegExpMap[keyof RegExpMap]
}>

export function columnRegexValidations(event: ChangeEvent<HTMLInputElement>, regexValidations: RegExpMap[keyof RegExpMap]) {

    let isValid: boolean = true,
        errors: string[] = [];

    let input = event.target.value

    if (regexValidations instanceof RegExp) {

        if (null === input.match(regexValidations)) {

            isValid = false;

            errors.push("Invalid input value (" + event.target.value + ")")

        }

        return {
            isValid, errors
        }

    }

    Object.keys(regexValidations).map((errorMessages) => {

        const regex = regexValidations[errorMessages]

        if (regex instanceof RegExp
            && null === input.match(regex)) {

            errors.push(errorMessages)

            isValid = false;

        }

    })

    return {
        isValid, errors
    }

}

export default function Input(props: iInput) {

    const {label, placeholder, children, required, regexValidations, ...inputProps} = props

    const [errors, setErrors] = useState<string[]>(regexValidations instanceof RegExp ? [] : Object.keys(regexValidations ?? {}))
    const [value, setValue] = useState<string | number | readonly string[]>(props.value ?? '')

    const dig = getStyles()

    const fullRow = (element) => <div className={dig.row}>
        <div className={dig.col12}>{element}</div>
    </div>

    const labelBody = label
        ? fullRow(<label className={classNames(dig.digHighlight2)}>
            <p>{label}&nbsp;
                {required && <abbr className={dig.textDanger} title="required">*</abbr>}
            </p>
        </label>)
        : undefined

    const alerts = (children: ReactNode | ReactNode[]) => <Tooltip
        content={!errors.length ? undefined : <>{errors.map((error, index) => <p key={index}>{error}</p>)}</>}
        direction={"bottom"}>{children}</Tooltip>

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        setValue(event.target.value)

        if (undefined !== regexValidations) {

            const {isValid, errors} = columnRegexValidations(event, regexValidations)

            setErrors(errors)

            if (isValid) {

                inputProps.onChange?.(event)

                event.target.style.color = "black";

            } else {

                event.target.style.color = "red";

            }

        } else {

            inputProps.onChange?.(event)

        }

    };

    switch (props.type) {

        case 'checkbox':
        case 'radio': {

            const isRadio = props.type === 'radio'

            return <div className={dig.row}>
                <label className={classNames(dig.digHighlight2)}>
                    <>
                        {labelBody && (<>{labelBody}</>)}
                        {alerts(<input style={{
                            color: "black",
                            display: 'hidden',
                            appearance: 'none',
                        }} {...inputProps} value={`${props.checked}`} onChange={onChange}/>)}
                        {props.checked
                            ? <FontAwesomeIcon icon={isRadio ? faCircleDot : faSquareCheck} size="lg"/>
                            : <FontAwesomeIcon icon={isRadio ? faCircle : faSquare} size="lg"/>}
                        {' '}
                        <div className={classNames(dig.dInline, dig.ms2, dig.alignItemsCenter)}>
                            {placeholder}{children}
                        </div>
                    </>
                </label>
            </div>

        }
        default:

            return <div className={classNames(dig.formRow, dig.formRowLast, dig.validateRequired)}
                        style={{margin: "1em 0"}}>
                {labelBody}
                {fullRow(alerts(<input className={classNames(dig.w100)}
                                       style={{
                                           color: "black",
                                           height: '2em',
                                           border: "2px solid var(--dig-light-blue)"
                                       }}
                                       {...inputProps}
                                       onChange={onChange}
                                       value={value}
                />))}
                {children}
            </div>
    }

}
