import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,

  reducers: {
    addOrder: (state, { payload }) => {

      const foundItem = state.order.find(item => item.id === payload);
      if (foundItem) {
        const modifyOrder = {
          ...state,
          order: state.order.map(item => {
            if (item.id === payload) {
              return { ...item, qnt: item.qnt + 1 };
            }
          }),
        };

        return modifyOrder;
      } else {
        const itemOrder = {
          id: payload,
          qnt: 1,
        };

        return { ...state, order: [...state.order, itemOrder] };

      }


    },
  },
  deleteOrder: (state, { payload }) => {
    return {
      ...state,
      order: state.order.filter((item) => item.id !== payload),
    };
  },
  deleteItemOrder: (state, { payload }) => {
    return state;
  },
  placeAnOrder: (state, _) => {
    return { ...state, order: [] };
  },
});

export const {
  addOrder,
  deleteOrder,
  deleteItemOrder,
  placeAnOrder,

} = ordersSlice.actions;
export const getOrder = state => state.order;


let items = [
  { name: 'item1', value: 10 },
  { name: 'item2', value: 20 },
  { name: 'item3', value: 30 },
];

