import { createSlice } from '@reduxjs/toolkit';
import { sampleTransactions } from './sampleData';

// Initial state of the transactions
const initialState = {
  transactions: sampleTransactions,
  status: 'idle', 
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    // Action to add a new transaction
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
    // Action to set loading status
    setLoading(state) {
      state.status = 'loading';
    },
    // Action to set error status
    setError(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Action to set success status
    setSuccess(state) {
      state.status = 'succeeded';
    },
  },
});

export const { addTransaction, setLoading, setError, setSuccess } = transactionSlice.actions;

export default transactionSlice.reducer;
