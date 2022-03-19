import { configureStore } from "@reduxjs/toolkit";

import brandReducer from "./brandReducer";

const store = configureStore({
    brands : brandReducer,
});


export default store;