import Modal from "../ModalContainer/components/Modal";
import {modalTitleDanger} from "../ModalContainer/Modal.module.scss";

import Button from "../../common/components/Button/Button";
import {discardButton, secondaryButton} from "../../common/components/Button/Button.module.scss";

import {useAppDispatch} from "../../hooks/redux";
import {closeDiscardChangesModal} from "../../store/modal/modal.slice";
import {MouseEventHandler} from "react";


export interface IDiscardChangesModalProps {
    onDiscard: () => void;
}

function DiscardChangesModal({ onDiscard }: IDiscardChangesModalProps) {

    const dispatch = useAppDispatch();

    const handleModalClose: MouseEventHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(closeDiscardChangesModal());
    }

    return (
        <Modal
            onClose={handleModalClose}
        >
            <Modal.Header>
                <Modal.Title className={modalTitleDanger}>
                    Discard creating question
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Modal.Text>
                    There is some modal text
                </Modal.Text>
            </Modal.Body>

            <Modal.Controls>
                <Button
                    onClick={onDiscard}
                    className={discardButton}
                >
                    Discard changes
                </Button>

                <Button
                    onClick={handleModalClose}
                    className={secondaryButton}
                >
                    Keep creating
                </Button>
            </Modal.Controls>
        </Modal>
    );
}

export default DiscardChangesModal;