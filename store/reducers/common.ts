export interface CommonState {
    appName: string;
    modalMode: boolean;
}

export enum CommonActionType {
    toggleModal = 'common/toggleModal',
}

export interface CommonAction {
    type: CommonActionType;
    payload: {
        appName?: string;
        modalMode?: boolean;
    };
}

export const initialCommonState: CommonState = {
    appName: '',
    modalMode: false,
};

export default function commonReducer(
    state: CommonState = initialCommonState,
    action: CommonAction
): CommonState {
    switch (action.type) {
        case CommonActionType.toggleModal: {
            const { modalMode } = action.payload;
            if (modalMode === undefined) return state;

            console.log(`toggling modal: ${modalMode}`);

            return { ...initialCommonState, modalMode };
        }
        default: {
            console.log(`Unknown Action Type ${action.type}`);
            return state;
        }
    }
}
