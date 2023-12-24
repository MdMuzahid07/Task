import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./productApi";


const projectState = {
    products: [],
    cart: [],
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
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        removeProduct: (state, action) => {
            const restOf = state.cart.filter((product) => product.id !== action.payload);
            state.cart = restOf;
        }
    },
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

export const { addToCart, removeProduct } = productSlice.actions;
export default productSlice.reducer;