import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import cartSlice from "./cartSlice";
import searchedItemSlice from "./searchedItemSlice";
import productInfoSlice from "./productInfoSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        category: categorySlice,
        cart: cartSlice,
        searchItem: searchedItemSlice,
        productInfo: productInfoSlice,
    },
})