import { post } from "@/helps/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authLogin = createAsyncThunk(
    'auth/login',
    async (data) => {
        const result = await post(`/auth/login`, data)

        return result
    }
)