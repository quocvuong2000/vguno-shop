import {
  getBrandsFailure,
  getBrandsStart,
  getBrandsSuccess,
  addBrandFailure,
  addBrandStart,
  addBrandSuccess,
} from "./brandReducer";

import axios from 'axios';

export const getBrands = async (dispatch) => {
    dispatch(getBrandsStart);
    try {
       const res = await axios.get("http://localhost:5000/api/brand/");
       dispatch(getBrandsSuccess(res.data));
    } catch (error) {
        dispatch(getBrandsFailure());
    }
};

export const addBrand = async (dispatch , brand) => {
    dispatch(addBrandStart);
    try {
        const res = await axios.post("http://localhost:5000/api/brand/" , brand);
        dispatch(addBrandSuccess(res.data));
    } catch (error) {
        dispatch(addBrandFailure());
    }
}
