import { IAllProducts } from "@/lib/interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  allProducts: IAllProducts;
  productLoading: boolean;
}

const initialState: InitialState = {
  allProducts: {
    page: 0,
    totalPages: 0,
    totalProducts: 0,
    products: [],
  },
  productLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },

    setProductLoading: (state, action) => {
      state.productLoading = action.payload;
    },
  },
});

export const { setAllProducts, setProductLoading } = productSlice.actions;
export default productSlice.reducer;
