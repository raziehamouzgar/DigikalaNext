// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const SetSearchValue = createAsyncThunk('search/SetSearchValue', async (props) => {
        return props
    },
)

export const search = createSlice({
    name: 'search',
    initialState: {
        searchvalue: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(SetSearchValue.fulfilled, (state, action) => {
            state.searchvalue = action.payload
        })
    },
})

export default search.reducer
