import type { RootState } from "../store";
export const selectTrucks = (state: RootState) => state.trucks.trucks;
export const selectSelectedTruck = (state: RootState) => state.trucks.selectedTruck;
export const selectIsLoading = (state: RootState) => state.trucks.isLoading;
export const selectError = (state: RootState) => state.trucks.error;
