import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  spacex: [],
};

const spacexSlice = createSlice({
  name: "spacex",
  initialState,
  reducers: {
    getSpacex: (state) => {
      state.loading = true;
    },
    getSpacexSuccess: (state, { payload }) => {
      state.spacex = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getSpacexFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const { getSpacex, getSpacexSuccess, getSpacexFailure } =
  spacexSlice.actions;

// A selector
export const spacexSelector = (state) => state.spacex;

// The reducer
export default spacexSlice.reducer;

// Asynchronous thunk action
export function fetchSpacex() {
  return async (dispatch) => {
    dispatch(getSpacex());

    try {
      const response = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await response.json();
      console.log(data);
      dispatch(getSpacexSuccess(data));
    } catch (error) {
      dispatch(getSpacexFailure());
    }
  };
}
