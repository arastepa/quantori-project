import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface loggedState {
  value: boolean;
}

const initialState: loggedState = {
  value: false,
};

export const loggedSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setLogged } = loggedSlice.actions;

export default loggedSlice.reducer;
