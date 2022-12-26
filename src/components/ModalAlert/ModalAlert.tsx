import * as React from "react";

import Modal from "react-modal";

import "./ModalAlert.scss";

export interface ModalAlertProps {
    isOpen: boolean;
    closeHandler: () => void;
    children: any;
    modalLabel: string;
}

export const ModalAlert: React.FC<ModalAlertProps> = ({ isOpen, closeHandler, children, modalLabel }) => {
    return (
        <Modal
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    inset: "30% auto auto 50%",
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: "12px",
                    color: "black",
                    fontSize: "2rem",
                    padding: "0",
                    maxWidth: "85%"
                }
            }}
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={closeHandler}
            contentLabel="Example Modal"

        >
            <div className="modalHeader__container">
                <div>{modalLabel}</div>
                <div>
                    <button className="modalHeader__button" onClick={closeHandler}>X</button>
                </div>
            </div>
            <div className="modalMain">
                {children}
            </div>
            <div className="modalFooter__container">
                <button className="modalFooter__button" onClick={closeHandler}>Ok...</button>
            </div>
        </Modal>
    );
};