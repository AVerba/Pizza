import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,

  reducers: {
    addOrder: (state, { payload }) => {
      return payload;
    },
  },
});

export const { addFilter } = ordersSlice.actions;
export const getOrder = state => state.order;
