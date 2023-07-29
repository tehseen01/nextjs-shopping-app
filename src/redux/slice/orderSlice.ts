import { Cart } from "@/lib/interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  orders: {
    items: Cart[];
    totalQuantity: number;
    totalPrice: number;
  } | null;
}
const initialState: InitialState = {
  orders: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state) => {
      const items = localStorage.getItem("order");
      const parsed = JSON.parse(items!);
      state.orders = parsed;
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
