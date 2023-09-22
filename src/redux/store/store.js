import { configureStore } from "@reduxjs/toolkit";
import currentSlideReducer from "../features/currentSlideSlice";
import newsChangerReducer from "../features/newsChanger";

export const store = configureStore({
  reducer: {
    currentSlider: currentSlideReducer,
    newsChanger: newsChangerReducer,
  },
});
