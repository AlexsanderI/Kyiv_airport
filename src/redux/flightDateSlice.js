import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flightDate: '',
};

export const flightDateSlice = createSlice({
  name: 'flightDate',
  initialState,
  reducers: {
    setFlightDate: (state, action) => {
      state.flightDate = action.payload;
    },
  },
});

export const { setFlightDate } = flightDateSlice.actions;
export default flightDateSlice.reducer;
