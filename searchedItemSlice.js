import { createSlice } from "@reduxjs/toolkit";

const searchItemSlice = createSlice({
    name: 'searchItem',
    initialState: {
        selectedSearch: null,
    },
    reducers: {
        setSelectedSearch: (state, action)=>{
            state.selectedSearch = action.payload ;
        },
    },
});

export const { setSelectedSearch } = searchItemSlice.actions;
export default searchItemSlice.reducer;

