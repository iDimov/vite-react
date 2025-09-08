import { createSlice } from "@reduxjs/toolkit";

export const initialState = {  
  filters: {
    features: [],
    form: null,
    location: "",
  },  
};

const slice = createSlice({
  name: "filters",
  initialState: initialState.filters,
  reducers: {
    changeFilter(state, action) {
      state.form = action.payload.form;
      state.location = action.payload.location;
      state.features = action.payload.features;
    },
  },
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;