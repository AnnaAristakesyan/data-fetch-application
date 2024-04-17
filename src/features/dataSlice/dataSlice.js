import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    items: [],
  },
  reducers: {
    fetchData: (state) => {
      state.loading = true;
    },
    setData: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
  },
});

export const { fetchData, setData } = dataSlice.actions;

export const fetchMockData = () => async (dispatch) => {
  dispatch(fetchData());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch(setData(data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default dataSlice.reducer;
