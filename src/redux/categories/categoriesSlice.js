import { createSlice } from '@reduxjs/toolkit';

// Initial state for categories
const initialState = {
  categories: [],
};

// Categories slice
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categories.push('Under construction');
    },
  },
});

// Export actions
export const { checkStatus } = categoriesSlice.actions;

// Export reducer
export default categoriesSlice.reducer;
