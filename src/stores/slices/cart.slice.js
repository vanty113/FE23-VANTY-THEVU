import { createSlice } from '@reduxjs/toolkit';

export const CART_LIMIT = 5;

const initialState = {
    cartState: {
        data: [],
        loading: false,
        error: null,
        // Thông tin phân trang
        pagination: {
            // Trang hiện tại
            page: 1,
            // Số record trả về trong 1 trang
            limit: CART_LIMIT,
            // Tổng số record từ server
            total: null,
            // Tổng số trang
            totalPage: null,
        },
    },
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getListCartAction: (state, action) => {
            state.cartState = {
                ...state.cartState,
                loading: true,
                pagination: {
                    ...state.cartState.pagination,
                },
            };
        },
        getListCartActionSuccess: (state, action) => {
            const { data, totalProduct } = action.payload;

            state.cartState = {
              ...state.cartState,
              data,
              loading: false,
              pagination: {
                ...state.cartState.pagination,
                total: +totalProduct,
                totalPage: totalProduct / CART_LIMIT,
              },
            };
        },
        getListCartActionFailed: (state, action) => {

        },
        addProductToCartAction: (state, action) => {
            state.cartState = {
                ...state.cartState,
                data: action.payload,
                loading: true,
              };
        },
        addProductToCartSuccess: (state, action) => {
            state.cartState = {
                ...state.cartState,
                data: action.payload,
                loading: false,
              };
        },
        logOutCart: (state, action) => {
            state.cartState = {
                ...state.cartState,
                data: [],
                loading: true,
              };
        },
        addProductToCartFailed: (state, action) => {

        },

        updateProductCartAction: (state, action) => {

        },
        updateProductCartActionSuccess: (state, action) => {

        },
        updateProductCartActionFailed: (state, action) => {

        },

        deleteProductCartAction: (state, action) => {

        },
        deleteProductCartActionSuccess: (state, action) => {

        },
        deleteProductCartActionFailed: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { addProductToCartAction,
    addProductToCartSuccess,
    addProductToCartFailed,
    getListCartAction,
    getListCartActionSuccess,
    getListCartActionFailed,
    deleteProductCartAction,
    deleteProductCartActionSuccess,
    deleteProductCartActionFailed,
    updateProductCartAction,
    updateProductCartActionSuccess,
    updateProductCartActionFailed,
    logOutCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;