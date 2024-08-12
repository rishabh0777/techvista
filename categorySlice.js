import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        selectedCategory: null,
    },
    reducers: {
        setSelectedCategory: (state, action) =>{
            state.selectedCategory = action.payload ;
        },
    },
});


export const {setSelectedCategory} = categorySlice.actions;
export default categorySlice.reducer;