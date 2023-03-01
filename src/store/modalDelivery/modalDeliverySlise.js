import { createSlice } from "@reduxjs/toolkit";


const modalSlise = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
  }
});

export const {openModal, closeModal} = modalSlise.actions;
export default modalSlise.reducer;