import { configureStore } from "@reduxjs/toolkit";
import spacexSlice from "./reducers/spacex/spacexSlice";


export const store = configureStore({
  reducer: {
    spacex: spacexSlice,
  },
});