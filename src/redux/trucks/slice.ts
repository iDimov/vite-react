import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTruckDetails } from "./operations";
import type { TrucksState } from "../../types";

const initialState: TrucksState = {
  trucks: [],  
  selectedTruck: null,
  isLoading: false,
  error: null,
};

export const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    clearSelectedTruck(state) {
      state.selectedTruck = null;
    },
  },
  extraReducers: (builder) => {
    builder      
      .addCase(fetchTrucks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trucks = action.payload.items;       
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Failed to fetch trucks";
      })      
      .addCase(fetchTruckDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTruckDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedTruck = action.payload;        
      })
      .addCase(fetchTruckDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Failed to fetch truck details";
      });
  },
});

export const { clearSelectedTruck } = trucksSlice.actions;
export default trucksSlice.reducer;
