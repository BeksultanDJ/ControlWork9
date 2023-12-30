import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: {
        type: '',
        category: '',
        amount: '',
    },
};

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setFormData(state, action) {
            state.formData = action.payload;
        },
        clearFormData(state) {
            state.formData = initialState.formData;
        },
    },
});

export const { setFormData, clearFormData } = transactionSlice.actions;
export default transactionSlice.reducer;
