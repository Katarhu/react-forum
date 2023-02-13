import {IDiscardChangesModalProps} from "../../components/DiscardChangesModal/DiscardChangesModal";


export interface DiscardModalInactive {
    isActive: false;
    props: null;
}

export interface DiscardModalActive {
    isActive: true;
    props: IDiscardChangesModalProps;
}

export type DiscardModalType = DiscardModalInactive | DiscardModalActive;


export interface IModalInitialState  {
    discardModal: DiscardModalType
}