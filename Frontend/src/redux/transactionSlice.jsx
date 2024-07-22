import { createSlice } from '@reduxjs/toolkit';
import { sampleTransactions } from '../utils/sampleData';

const initialState = {
  transactions: sampleTransactions,
  status: 'idle', 
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
    deleteTransaction(state, action) {
      state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
    },
    setLoading(state) {
      state.status = 'loading';
    },
    setError(state, action) {
      state.status = 'error';
      state.error = action.payload;
    },
    setSuccess(state) {
      state.status = 'success';
    },
  },
});

export const { addTransaction, deleteTransaction, setLoading, setError, setSuccess } = transactionSlice.actions;

export default transactionSlice.reducer;
