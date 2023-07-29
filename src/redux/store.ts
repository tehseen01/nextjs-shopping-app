import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./slice/productSlice";
import filterSlice from "./slice/filterSlice";
import cartSlice from "./slice/cartSlice";
import userSlice from "./slice/userSlice";
import orderSlice from "./slice/orderSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    filter: filterSlice,
    cart: cartSlice,
    user: userSlice,
    order: orderSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
