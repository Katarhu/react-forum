import * as styles from "./Modal.module.scss";
import {useAppSelector} from '../../hooks/redux';
import {selectModalFeature} from '../../store/modal/modal.selectors';
import ModalWrapper from './components/ModalWrapper';

function Modal() {

    const {isDiscardChangesModal} = useAppSelector(selectModalFeature);

    return (
        <>
            {isDiscardChangesModal && <ModalWrapper children={<div>hello</div>} />}
        </>
    );
}

export default Modal;