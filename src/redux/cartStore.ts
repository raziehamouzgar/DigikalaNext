// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const GetCart = createAsyncThunk('cart/GetProduct', async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/product`)
    return res.data
})

export const AddToCart = createAsyncThunk('cart/AddToCart', async props => {
    return props
})

export const RemoveCart = createAsyncThunk(
    'cart/RemoveCart',
    async (props, { dispatch, getState }) => {
        const { carts } = getState().cart
        return carts.filter(item => item !== props)
    },
)

export const cart = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(AddToCart.fulfilled, (state, action) => {
            state.carts.push(action.payload)
        })
        builder.addCase(RemoveCart.fulfilled, (state, action) => {
            state.carts = action.payload
        })
    },
})

export default cart.reducer
