import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  kakaoToken: "",
  nickname: "",
  profileImageUrl: "",
};

const userSlice = createSlice({
  name: "user13th",
  initialState: initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setkakaoToken(state, action) {
      state.kakaoToken = action.payload;
    },
    setNickname(state, action) {
      state.nickname = action.payload;
    },
    setProfileImageUrl(state, action) {
      state.profileImageUrl = action.payload;
    },
    removeUser(state, action) {
      console.log("Init");
      return initialState;
    },
  },
});

export const {
  setUserId,
  setkakaoToken,
  setNickname,
  setProfileImageUrl,
  removeUser,
} = userSlice.actions;

export default userSlice.reducer;
