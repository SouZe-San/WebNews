import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsTitle: "General",
  newsRef: "",
};

export const newsChangerSlice = createSlice({
  name: "newsChanger",
  initialState,
  reducers: {
    titleChanger: (state, action) => {
      state.newsTitle = action.payload;
    },
    newsRefChanger: (state, action) => {
      state.newsRef = action.payload;
    },
  },
});

export const { titleChanger, newsRefChanger } = newsChangerSlice.actions;

export default newsChangerSlice.reducer;
