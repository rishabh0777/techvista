import { doc, setDoc, updateDoc, arrayUnion, getDoc, arrayRemove } from 'firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from  './src/Configuration/firebaseConfig'

// Function to add to cart
export const addToCart = createAsyncThunk('cart/addToCart', async ({ userId, product }, thunkAPI) => {
  try {
    const cartDoc = doc(db, 'carts', userId);
    const docSnap = await getDoc(cartDoc);
    if (docSnap.exists()) {
      await updateDoc(cartDoc, {
        items: arrayUnion(product),
      });
    } else {
      await setDoc(cartDoc, { items: [product] });
    }
    return product;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Function to load cart
export const loadCart = createAsyncThunk('cart/loadCart', async (userId, thunkAPI) => {
  try {
    const cartDoc = doc(db, 'carts', userId);
    const docSnap = await getDoc(cartDoc);
    if (docSnap.exists()) {
      return docSnap.data().items;
    } else {
      // Initialize the cart document if it doesn't exist
      await setDoc(cartDoc, { items: [] });
      return [];
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//Function remove item from cart
export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async ({userId, product}, thunkAPI)=>{
  try{
    const cartDoc = doc(db, 'carts', userId);
    await updateDoc(cartDoc,{
      items: arrayRemove(product),
    });
    return product;
  }catch(error){
    return thunkAPI.rejectWithValue(error.message);
  }
})



// Create a slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeItemFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
