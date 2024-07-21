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
   
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
  
    setLoading(state) {
      state.status = false;
    },
    
    setError(state, action) {
      state.status = true;
      state.error = action.payload;
    },
   
    setSuccess(state) {
      state.status = true;
    },
  },
});

export const { addTransaction, setLoading, setError, setSuccess } = transactionSlice.actions;

export default transactionSlice.reducer;
