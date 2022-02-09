import { configureStore } from "@reduxjs/toolkit";

import cartItemRedux from "./cart-item/cartItemRedux";

const store = configureStore({
    reducer : {
        cartItem : cartItemRedux
    }
})

export default store;
