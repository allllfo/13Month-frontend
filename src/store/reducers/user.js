import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 'none',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state, action) {
      state = initialState;
    },
  },
});
