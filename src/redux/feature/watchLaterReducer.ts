import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MediaDataType } from "../../Types/types";

interface WatchLaterType {
  mediaData: Array<MediaDataType>;
}

const initialState: WatchLaterType = {
  mediaData: [],
};

const watchLaterSlice: any = createSlice({
  name: "watchLaterSlice",
  initialState,
  reducers: {
    addToWatchLater: (state: RootState, action: any) => {
      state.mediaData = [action.payload, ...state.mediaData];
    },
    deleteWatchLater: (state: RootState, action: any) => {
      state.mediaData = action.payload;
    },
  },
});

export const { addToWatchLater, deleteWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
