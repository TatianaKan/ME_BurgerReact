import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: JSON.parse(localStorage.getItem('oreder') || '[]')
};

export const localStorageMiddleware = store => next => action => {
  const nextAction = next(action);

  if (nextAction.type.startsWith('order/')) {
    const orderList = store.getState().order.orderList;
    localStorage.setItem('order', JSON.stringify(orderList));
  }

  return nextAction;
}


const orderSlise = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.orderList
        .find(item => item.id === action.payload.id);

      if (product) {
        product.count += 1;
      } else {
        state.orderList.push({ ...action.payload, count: 1 })
      }

    }
  }
})


export const { addProduct } = orderSlise.actions;
export default orderSlise.reducer;