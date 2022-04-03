import { configureStore } from "@reduxjs/toolkit";

import brandReducer from "./brandReducer";

const store = configureStore({
    reducer: {
        brands : brandReducer,
    }
});


export default store;