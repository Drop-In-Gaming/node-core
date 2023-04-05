import classNames from 'classnames';
import Popup from 'components/Popup/Popup';
import { useEffect } from 'react';
import { getStyles } from 'variables/DropVariables';
import styles from 'style.module.scss';
import { iWithRouter } from 'components/WithRouter/WithRouter';

// import {TEAM_PATH} from "views/Team/Team";

interface iTournamentProperties extends iWithRouter {
    title?: string,
    text?: string,
    icon?: string,
    buttons?: string[],
    timer?: number,
    handleClose?: (buttonPressed: string) => void
}

export default function Alert(props: iTournamentProperties) {

    const dig = getStyles(styles);

    const { handleClose,
        title = 'Alert',
        text = 'Alert',
        icon = 'info',
        buttons = ['close'],
        timer = 5000 } = props;

    useEffect(() => {

        if (timer === 0) {

            return;

        }

        setTimeout(() => {
            handleClose?.('timeout')
        }, timer);

    })

    return <Popup handleClose={() => handleClose?.('outsideClickHandler')}>
        <div className={classNames(dig.rounded0, dig.border0)}>
            {icon}
            <div className={classNames(dig.modalHeader, dig.rounded0, dig.border0, dig.digBgCardHeader)}>
                <h3 className={classNames(dig.modalTitle, dig.textDark)} id='staticBackdropLabel'>{title}</h3>
            </div>
            <div className={classNames(dig.modalBody, dig.border0, dig.digBgNeutral8, dig.digTextWhite)}>
                <form className={classNames(dig.mb3, dig.w100)}>
                    <div className={classNames(dig.row, dig.mx0)}>
                        <div
                            className={classNames(dig.col12, dig.dFlex, dig.justifyContentBetween, dig.alignItemsCenter)}>
                            {text}
                        </div>
                    </div>
                </form>
            </div>
            <div className={classNames(dig.modalFooter, dig.digBgNeutral7, dig.border0, dig.rounded0)}>
                {buttons.map((button, index) => <div
                    className={classNames(dig.btn, dig.btnLg, dig.digBgNeutral3, 'btn-no', dig.rounded0, dig.px5, dig.py3, dig.fontSize1Em, dig.textWhite, dig.fontWeightBold)}
                    onClick={() => handleClose?.(button)}>button
                </div>)}
            </div>
        </div>
    </Popup>;

}


