import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState, userDataInterface } from "../contracts";

const initialState: AuthState = {
  phone: "",
  userData: {
    _id: "",
    mobile: "",
    role: "",
    createAt: "",
  },
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    resetPhone: (state) => {
      state.phone = "";
    },
    setUserData: (state, action: PayloadAction<userDataInterface>) => {
      state.userData = action.payload;
    },
  },
});

export const { setPhone, resetPhone, setUserData } = AuthSlice.actions;

export default AuthSlice.reducer;
