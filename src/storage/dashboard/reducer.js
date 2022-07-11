import {
    createSlice
} from "@reduxjs/toolkit";

import {
    setBoard,
    setEditingMode
} from './actions'

const initialState = {
    board: 'overview',
    editing: false,
}

export const dashBoardInfo = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setBoard,
        setEditingMode
    }
})

export const {
    setBoard,
    setEditingMode
} = dashBoardInfo.actions

export default dashBoardInfo.reducer