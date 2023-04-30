import { configureStore } from "@reduxjs/toolkit";
import watchLaterSlice from "./feature/watchLaterReducer";

export const store: any = configureStore({
  reducer: {
    watchLater: watchLaterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
