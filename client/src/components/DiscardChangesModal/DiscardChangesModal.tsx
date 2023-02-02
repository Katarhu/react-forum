import Modal from "../ModalContainer/components/Modal";
import {modalTitleDanger} from "../ModalContainer/Modal.module.scss";

import Button from "../../common/components/Button/Button";
import {discardButton, secondaryButton} from "../../common/components/Button/Button.module.scss";

import {useAppDispatch} from "../../hooks/redux";
import {closeDiscardChangesModal} from "../../store/modal/modal.slice";

function DiscardChangesModal() {

    const dispatch = useAppDispatch();

    const handleModalClose = () => {
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
                <Button className={discardButton}>
                    Discard changes
                </Button>

                <Button className={secondaryButton}>
                    Keep creating
                </Button>
            </Modal.Controls>
        </Modal>
    );
}

export default DiscardChangesModal;