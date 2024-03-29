import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: 0,
};

export const currentSlideSlice = createSlice({
  name: "currentSlider",
  initialState,
  reducers: {
    forward: (state) => {
      if (state.current === 3) {
        state.current = 0;
        return;
      }
      state.current += 1;
    },
    backward: (state) => {
      if (state.current === 0) {
        state.current = 3;
        return;
      }
      state.current -= 1;
    },
    desireSlide: (state, action) => {
      console.log(action.payload);
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { forward, backward, desireSlide } = currentSlideSlice.actions;

export default currentSlideSlice.reducer;
