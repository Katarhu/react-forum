import {useAppSelector} from '../../hooks/redux';

import {selectModalFeature} from '../../store/modal/modal.selectors';
import DiscardChangesModal from "../DiscardChangesModal/DiscardChangesModal";

function ModalContainer() {

    const {isDiscardChangesModal} = useAppSelector(selectModalFeature);

    return (
        <>
            {isDiscardChangesModal && <DiscardChangesModal />}
        </>
    );
}

export default ModalContainer;