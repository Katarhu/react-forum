import {useAppSelector} from '../../hooks/redux';
import {selectModalFeature} from '../../store/modal/modal.selectors';

import DiscardChangesModal from "../DiscardChangesModal/DiscardChangesModal";


function ModalContainer() {

    const {discardModal} = useAppSelector(selectModalFeature);

    return (
        <>
            {discardModal.isActive && <DiscardChangesModal {...discardModal.props} />}
        </>
    );
}

export default ModalContainer;