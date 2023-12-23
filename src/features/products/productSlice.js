import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./productApi";


const projectState = {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
    findSuccessfully: false
};


export const getProductData = createAsyncThunk("products/getProducts", async () => {
    const products = fetchProduct();
    return products;
});

const productSlice = createSlice({
    name: "products",
    initialState: projectState,
    extraReducers: (builder) => {
        builder.addCase(getProductData.pending, (state) => {
            state.isLoading = true,
                state.isError = false
        });
        builder.addCase(getProductData.fulfilled, (state, action) => {
            state.isLoading = false,
                state.products = action.payload
        });
        builder.addCase(getProductData.rejected, (state, action) => {
            state.isLoading = false,
                state.isError = true,
                state.error = action.error.message
        });
    }
});

export default productSlice.reducer;