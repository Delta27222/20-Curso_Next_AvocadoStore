import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  selected: 'none'
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action)  => {
      state.loading = action.payload
    },
    setSelected: (state, action)  => {
      state.selected = action.payload
    },
  }
})

export const { setLoading, setSelected } = uiSlice.actions;

export default uiSlice.reducer;