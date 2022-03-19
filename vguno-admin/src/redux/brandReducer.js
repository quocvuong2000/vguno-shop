import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  brands: [],
  isFetching: false,
  error: false,
};

const brandSlice = createSlice({
  name: "brand",
  initialState: INITIAL_STATE,
  reducers: {
    //GET ALL
    getBrandsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getBrandsSuccess: (state, action) => {
      state.brands = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    getBrandsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //ADD BRAND
    addBrandStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addBrandSuccess: (state, action) => {
      state.isFetching = false;
      action.brands.push(action.payload);
    },
    addBrandFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getBrandsStart,
  getBrandsSuccess,
  getBrandsFailure,
  addBrandStart,
  addBrandSuccess,
  addBrandFailure,
} = brandSlice.actions;

export default brandSlice.reducer;
