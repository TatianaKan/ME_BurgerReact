import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import orderREducer, { localStorageMiddleware } from "./order/orderSlise.js";
import productReducer from "./product/productSlice.js";
import modalReduser from './modalDelivery/modalDeliverySlise';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderREducer,
    modal: modalReduser,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware)

});