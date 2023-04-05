import classNames from "classnames";
import OutsideClickHandler from 'react-outside-click-handler';
import BodyEnd from "components/BodyEnd/BodyEnd";
import {getStyles} from "variables/DropVariables";


interface iPopupProperties {
    open?: boolean;
    handleClose?: () => any;
    children: any;
}

// @link https://stackoverflow.com/questions/58399637/include-modal-functionality-in-react-higher-order-component
export default function Popup({
                                  open = true,
                                  handleClose,
                                  children,
                              }: iPopupProperties) {

    if (false === open) {

        return null;

    }

    const dig = getStyles()

    return <BodyEnd>
        <div className={classNames(dig.modal, dig.fade, dig.show, dig.dBlock)}
             style={{backgroundColor: "rgba(0,0,0,0.8)"}}
             id="exampleModalCenter"
             tabIndex={-1} aria-labelledby="exampleModalCenterTitle"
             aria-modal="true" role="dialog">

            <div className={classNames(
                dig.modalDialog, dig.modalDialogCentered
            )}>
                <OutsideClickHandler onOutsideClick={() => handleClose?.()}>
                    <div className={classNames(dig.modalContent, dig.bgTransparent, dig.modalDialogScrollable)}>
                        {children}
                    </div>
                </OutsideClickHandler>
            </div>

        </div>
    </BodyEnd>

}

