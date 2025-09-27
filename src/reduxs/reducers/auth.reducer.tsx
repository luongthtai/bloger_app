import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "../actions/auth.action";

const authSlice = createSlice({
    name: "auth",
    initialState: {

    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(authLogin.pending, (state, action) => {

        })
        builder.addCase(authLogin.fulfilled, (state, action) => {

        })
    }
})

export const { } = authSlice.actions
export default authSlice.reducer