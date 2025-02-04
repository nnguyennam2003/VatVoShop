import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        role: null,
        isAuthenticated: false,
        status: "idle", // idle | loading | succeeded | failed
        error: null
    },
    reducers: {
        setLoginSuccess: (state, action) => {
            const { token, role } = action.payload
            state.token = token
            state.role = role
            state.isAuthenticated = true
            state.status = "succeeded"
        },
        setLoginFailure: (state, action) => {
            state.error = action.payload;
            state.status = "failed";
        },
        setLoading: (state) => {
            state.status = "loading";
            state.error = null;
        },
        logout: (state) => {
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
            state.status = "idle";
        },
    }
})

export const { setLoginSuccess, setLoginFailure, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;