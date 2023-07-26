import { IUser } from "@/lib/interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  authStatus: boolean;
  user: IUser | null;
}

const initialState: InitialState = {
  authStatus: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },
  },
});

export const { setUser, setAuthStatus } = userSlice.actions;
export default userSlice.reducer;
