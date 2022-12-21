import React from "react";
import { Provider, useDispatch } from "react-redux";

import store from "./store/AppStore";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const AppProvider: React.FC<any> = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);
export default AppProvider;
