import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  kakaoToken: '',
  userId: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state, action) {
      return initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
