import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import AppSlice from "./slices/AppSlice";

const logger = createLogger({
  diff: true,
});
const store = configureStore({
  reducer: {
    root: AppSlice.reducer,
  },
  middleware: [logger],
});

export default store;
