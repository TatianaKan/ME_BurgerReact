import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import orderREducer, { localStorageMiddleware } from "./order/orderSlise.js";
import productReducer from "./product/productSlice.js";


export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderREducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware)

});