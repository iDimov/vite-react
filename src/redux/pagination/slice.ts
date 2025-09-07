import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_VISIBLE_COUNT } from '../../constants';

interface PaginationState {
  visibleCount: number;
}

const initialState: PaginationState = {
  visibleCount: INITIAL_VISIBLE_COUNT,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setVisibleCount: (state, action: PayloadAction<number>) => {
      state.visibleCount = action.payload;
    },
    incrementVisibleCount: (state, action: PayloadAction<number>) => {
      state.visibleCount += action.payload;
    },
    resetVisibleCount: (state) => {
      state.visibleCount = INITIAL_VISIBLE_COUNT;
    },
  },
});

export const {
  setVisibleCount,
  incrementVisibleCount,
  resetVisibleCount,
} = paginationSlice.actions;

export default paginationSlice.reducer;
