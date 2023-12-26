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
            const findExist = state.cart.find((product) => product.id === action.payload.id);
            if (!findExist) {
                state.cart = [...state.cart, { ...action.payload, quantity: 1 }]
            }
            else {
                findExist.quantity = findExist.quantity + 1;
            }

        },
        increaseQuantity: (state, action) => {
            const findToIncrement = state.cart.find((product) => product.id === action.payload);
            if (!findToIncrement) {
                return;
            } else {
                findToIncrement.quantity = findToIncrement.quantity + 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const findToDecrement = state.cart.find((product) => product.id === action.payload);
            if (!findToDecrement) {
                return;
            } else if (findToDecrement.quantity >= 1) {
                findToDecrement.quantity = findToDecrement.quantity - 1;
            }
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

export const { addToCart, removeProduct, increaseQuantity, decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;