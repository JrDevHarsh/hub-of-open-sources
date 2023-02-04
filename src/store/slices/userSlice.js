import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  uid: null,
  displayName: null,
  email: null,
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn: (state, action) => {
      const { uid, displayName, email } = action.payload;
      state.isUserLoggedIn = true;
      state.uid = uid;
      state.displayName = displayName;
      state.email = email;
    },
    userLogOut: (state) => {
      state.isUserLoggedIn = false;
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.currentUser = null;
    },
    createCurrentUser: (state, action) => {
      state.currentUser = { ...action.payload };
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
  },
});
// get current user's info if user is logged-in
export function getCurrentUser(state) {
  return state.user.currentUser;
}

// action creators
export const { userLogIn, userLogOut, createCurrentUser, updateCurrentUser } =
  userSlice.actions;

export default userSlice.reducer;
