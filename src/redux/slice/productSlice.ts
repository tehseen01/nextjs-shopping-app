import { IAllProducts } from "@/lib/interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  allProducts: IAllProducts;
}

const initialState: InitialState = {
  allProducts: {
    page: 0,
    totalPages: 0,
    totalProducts: 0,
    products: [],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setAllProducts } = productSlice.actions;
export default productSlice.reducer;
