import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type FavouriteItem = string;

interface FavouritesState {
  items: FavouriteItem[];
}

const initialState: FavouritesState = { items: [] };

const slice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite(state, action: PayloadAction<FavouriteItem>) {
      const index = state.items.indexOf(action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavourite } = slice.actions;
export const favouritesReducer = slice.reducer;
