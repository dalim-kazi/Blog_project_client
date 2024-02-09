import { createSlice } from "@reduxjs/toolkit";
import { userSignInAsync, userSignUpAsync } from "../../Action/Auth.action/Auth.action";

const initialState = {
    isLoading:false ,
    isError:false,
    currentUser :{}
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(userSignUpAsync.pending, (state) => {
            state.isLoading = true 
            state.isError =false
        })
        builder.addCase(userSignUpAsync.fulfilled, (state,action) => {
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(userSignUpAsync.rejected, (state) => {
            state.isLoading = false 
            state.isError =true
        })
        // sign in 
        builder.addCase(userSignInAsync.pending, (state) => {
            state.isLoading = true 
            state.isError= false
        })
        builder.addCase(userSignInAsync.fulfilled, (state,action) => {
            state.isLoading = false
            state.isError = false
            state.currentUser =action.payload
        })
        builder.addCase(userSignInAsync.rejected, (state) => {
            state.isLoading = false 
            state.isError = true 
            
        })
    }
})

export default authSlice.reducer