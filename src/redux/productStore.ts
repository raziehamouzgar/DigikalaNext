// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const GetProduct = createAsyncThunk('product/GetProduct', async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/product`)
    return res.data
})

export const product = createSlice({
    name: 'product',
    initialState: {
        product: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(GetProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
    },
})

export default product.reducer
