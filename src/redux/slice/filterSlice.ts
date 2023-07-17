import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  company: string[];
}

const initialState: InitialState = {
  company: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      let company = action.payload;
      let index = state.company.indexOf(company);

      index > -1 ? state.company.splice(index, 1) : state.company.push(company);
    },
  },
});

export const { setCompany } = filterSlice.actions;
export default filterSlice.reducer;
