// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// export const GetCart = createAsyncThunk('cart/GetProduct', async () => {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/product`)
//     return res.data
// })

// export const AddToCart = createAsyncThunk(
//     'cart/AddToCart',
//     async (props, { dispatch, getState }) => {
//         const { carts } = getState().cart
//         const itemInCart = carts.find(item => item.id === props)
//         if (itemInCart) {
//             itemInCart.quantity++
//         } else {
//             return { ...props, quantity: 1 }
//         }
//     },
// )

// export const RemoveCart = createAsyncThunk(
//     'cart/RemoveCart',
//     async (props, { dispatch, getState }) => {
//         const { carts } = getState().cart
//         return carts.filter(item => item !== props)
//     },
// )

export const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                item => item.id === action.payload[0],
            )
            if (itemInCart) {
                itemInCart.quantity++
                state.total = state.total + parseInt(action.payload[1])
            } else {
                state.cart.push({ id: action.payload[0], quantity: 1 }),
                    (state.total = state.total + parseInt(action.payload[1]))
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload[0])
            item.quantity++
            state.total = state.total + parseInt(action.payload[1])
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload[0])
            if (item.quantity === 1) {
                item.quantity = 1
                state.total = state.total - parseInt(action.payload[1])
            } else {
                item.quantity--
                state.total = state.total - parseInt(action.payload[1])
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter(
                item => item.id !== action.payload[0],
            )
            state.cart = removeItem
            state.total = state.total - parseInt(action.payload[1])
        },
    },
    // extraReducers: builder => {
    //     builder.addCase(AddToCart.fulfilled, (state, action) => {
    //         state.carts.push(action.payload)
    //     })
    //     builder.addCase(RemoveCart.fulfilled, (state, action) => {
    //         state.carts = action.payload
    //     })
    // },
})

export default cart.reducer
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
    cart.actions
