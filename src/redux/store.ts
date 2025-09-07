import { configureStore } from "@reduxjs/toolkit";
import trucksReducer from "./trucks/slice";
import { filtersReducer } from "./filters/slice";
import { favouritesReducer } from "./favourites/slice";
import modalReducer from './modal/slice';
import paginationReducer from './pagination/slice';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; 

const favouritesPersistConfig = {
  key: "favourites",
  storage,
};

const persistedFavouritesReducer = persistReducer(favouritesPersistConfig, favouritesReducer);

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filters: filtersReducer,
    modal: modalReducer,
    pagination: paginationReducer,
    favourites: persistedFavouritesReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {

        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
