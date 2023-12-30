import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendTransactionData = createAsyncThunk(
    'transactions/sendTransactionData',
    async (transactionData, { rejectWithValue }) => {
        try {
            const response = await fetch('https://controll-17843-default-rtdb.europe-west1.firebasedatabase.app/transactions.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transactionData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Transaction added:', data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchTransactions = createAsyncThunk(
    'transactions/fetchTransactions',
    async () => {
        try {
            const response = await fetch('https://controll-17843-default-rtdb.europe-west1.firebasedatabase.app/transactions.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Failed to fetch transactions');
        }
    }
);
