import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  brand: string[];
  openFilter: boolean;
  sort: { field: string; order: string };
  rating: string;
  offer: string;
}

const initialState: InitialState = {
  brand: [],
  openFilter: false,
  sort: {
    field: "",
    order: "",
  },
  rating: "",
  offer: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      let brand = action.payload;
      let index = state.brand.indexOf(brand);

      index > -1 ? state.brand.splice(index, 1) : state.brand.push(brand);
    },

    setOpenFilter: (state, action) => {
      state.openFilter = action.payload;
      state.openFilter === true
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "visible");
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setRating: (state, action) => {
      state.rating = action.payload === state.rating ? "" : action.payload;
    },

    setOffer: (state, action) => {
      state.offer = action.payload === state.offer ? "" : action.payload;
    },
  },
});

export const { setBrand, setOpenFilter, setSort, setRating, setOffer } =
  filterSlice.actions;
export default filterSlice.reducer;
