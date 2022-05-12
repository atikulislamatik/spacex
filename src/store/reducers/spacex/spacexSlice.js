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

export const { getSpacex, getSpacexSuccess, getSpacexFailure } =
  spacexSlice.actions;

export const spacexSelector = (state) => state.spacex;

export default spacexSlice.reducer;

export function fetchSpacex() {
  return async (dispatch) => {
    dispatch(getSpacex());

    try {
      const response = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await response.json();

      dispatch(getSpacexSuccess(data));
    } catch (error) {
      dispatch(getSpacexFailure());
    }
  };
}
