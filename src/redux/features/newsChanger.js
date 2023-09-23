import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsTitle: "General",
};

export const newsChangerSlice = createSlice({
  name: "newsChanger",
  initialState,
  reducers: {
    titleChanger: (state, action) => {
      state.newsTitle = action.payload;
    },
  },
});

export const { titleChanger } = newsChangerSlice.actions;

export default newsChangerSlice.reducer;
