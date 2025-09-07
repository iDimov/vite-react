
import type { RootState } from '../store';

export const selectIsModalOpen = (modalName: string) => (state: RootState) =>
  !!state.modal.openModals[modalName];
