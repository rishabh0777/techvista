import { createSlice } from "@reduxjs/toolkit";

export const getProductInfoSlice = createSlice({
    name: 'productInfo',
    initialState:{
        selectedProductInfo: null,
    },
    reducers:{
        setSelectedProductInfo: (state, action)=>{
            state.selectedProductInfo = action.payload;
        },
    },
});

export const { setSelectedProductInfo } = getProductInfoSlice.actions
export default getProductInfoSlice.reducer