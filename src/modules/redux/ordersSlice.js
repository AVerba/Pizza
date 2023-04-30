import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  order: {},
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,

  reducers: {
    addOrder: (state, action) => {
      const {id} = action.payload;
      const item = state.order[id];
      if (item) {
        item.quantity += 1;
      } else {
        state.order[id] = {
          id,
          quantity: 1,
        };
      }
    },
    deleteItemOrder: (state, action) => {
      const {id} = action.payload;
      const item = state.order[id];
      if (item) {
        if (item.quantity === 1) {
          delete state.order[id];
        } else {
          item.quantity -= 1;
        }
      }
    },
    deleteFromOrder:(state,action)=>{
      const { id } = action.payload;
      delete state.order[id];
    },

    makeOrder(state, _) {
      return { ...state, order:  {} };
    },




  },
});

export const {
  addOrder,
  deleteItemOrder,
  deleteFromOrder,
  makeOrder


} = ordersSlice.actions;
export const getOrder = state => state.order;



