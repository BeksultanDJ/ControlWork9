import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface Category {
    name:string;
    type: string;
    id: string;
}
export const sendCategoryData = createAsyncThunk(
    'categories/sendCategoryData',
    async (categoryData: Category, { rejectWithValue }) => {
        try {
            const response = await fetch('https://controll-17843-default-rtdb.europe-west1.firebasedatabase.app/categories.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(categoryData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Category added:', data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getCategory = createAsyncThunk(
    'categories/getCategory',
    async () => {
        try {
            const response = await fetch('https://controll-17843-default-rtdb.europe-west1.firebasedatabase.app/categories.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Failed to fetch categories');
        }
    }
);

interface CategoryState {
    categories: Category[];
}

const initialCategoryState: CategoryState = {
    categories: [],
};

const categorySlice = createSlice({
    name: 'categories',
    initialState: initialCategoryState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.categories = Object.values(action.payload);
        });
    },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;