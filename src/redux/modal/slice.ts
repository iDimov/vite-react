import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ModalName = 'filters' | 'notification' | string;

interface ModalState {
  openModals: Record<ModalName, boolean>;
}

const initialState: ModalState = {
  openModals: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalName>) => {
      state.openModals[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<ModalName>) => {
      state.openModals[action.payload] = false;
    },
    toggleModal: (state, action: PayloadAction<ModalName>) => {
      state.openModals[action.payload] = !state.openModals[action.payload];
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
