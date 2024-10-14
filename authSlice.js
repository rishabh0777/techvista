import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./src/Configuration/firebaseConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const auth = getAuth(app)

export const signUpUser = createAsyncThunk('auth/signUpUser', async ({email, password}, thunkAPI)=>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user
        await sendEmailVerification(user)
        return user
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({email, password}, thunkAPI)=>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email, password);
        const user= userCredential.user
        return user
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user:null,
        error:null,
        loading:false,
    },
    reducers:{
        logout:(state)=>{
            state.user = null
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(signUpUser.pending,(state)=>{
            state.loading = true
            state.error = false
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
          })
          .addCase(loginUser.pending, (state) => {
            state.loading = true
            state.error = null
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
          })
      },
    })
    
    export const { logout } = authSlice.actions 
    export default authSlice.reducer
    
