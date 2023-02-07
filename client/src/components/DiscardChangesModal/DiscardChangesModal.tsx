import Modal from "../../common/components/Modal/Modal";
import {modalTitleDanger} from "../../common/components/Modal/Modal.module.scss";

import Button from "../../common/components/Button/Button";
import {commonButton} from "../../common/components/Button/Button.module.scss";

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
                    className={commonButton}
                >
                    Discard changes
                </Button>

                <Button
                    onClick={handleModalClose}
                    className={commonButton}
                >
                    Keep creating
                </Button>
            </Modal.Controls>
        </Modal>
    );
}

export default DiscardChangesModal;