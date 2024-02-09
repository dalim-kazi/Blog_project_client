import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { Get, Post, baseAPI } from "../../Services/CommonService";
import toast from "react-hot-toast";


// signup
export const userSignUpAsync = createAsyncThunk(
  "auth/userSignUpAsync",
  async (userInfo) => {
    try {
      const url = `${baseAPI}/signup`;
      const result = await Post(url, userInfo);
      toast.success(result.data.message);
      return result.data.model
      ;
    } catch (error) {
      toast.error(error.message);
      return isRejectedWithValue(error);
    }
  }
);


// signIn 
export const userSignInAsync = createAsyncThunk("auth/userSignInAsync", async (userInfo) => {
  try {
    console.log(userInfo)
    const url = `${baseAPI}/signIn`;
    const result = await Post(url, userInfo)
    toast.success(result.data.result.message)
    return result.data.result
  }
  catch (error) {
    toast.error("Unable to signIn")
    return isRejectedWithValue(error.message)
  }
})