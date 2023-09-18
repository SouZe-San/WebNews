import { configureStore } from "@reduxjs/toolkit";
import currentSlideReducer from "../features/currentSlideSlice";

export const store = configureStore({
  reducer: {
    currentSlider: currentSlideReducer,
  },
});
