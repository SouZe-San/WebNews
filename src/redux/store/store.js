import { configureStore } from "@reduxjs/toolkit";
import currentSlideReducer from "../features/currentSlideSlice";
import newsChangerReducer from "../features/newsChanger";
import authenticationReducer from "../features/authenticationSlice";

export const store = configureStore({
  reducer: {
    currentSlider: currentSlideReducer,
    newsChanger: newsChangerReducer,
    authentication: authenticationReducer,
  },
});
