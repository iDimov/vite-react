import { createAsyncThunk } from "@reduxjs/toolkit";
import { campersApi } from "../../config/campersApi";
import type { Truck } from "../../types";

type TrucksApiResponse = {
  items: Truck[];
  
};

export const fetchTrucks = createAsyncThunk<
  { items: Truck[];},
  void,
  { rejectValue: string }
>(
  "trucks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await campersApi.get<TrucksApiResponse>("/campers");      

      return {
        items: data.items,        
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const fetchTruckDetails = createAsyncThunk<
  Truck,
  string,
  { rejectValue: string }
>(
  "trucks/fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await campersApi.get<Truck>(`/campers/${id}`);      
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);
