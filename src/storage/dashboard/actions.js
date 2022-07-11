const setBoard = (state, action) => {
    return {
        ...state,
        board: action.payload
    }
}

const setEditingMode = (state) => {
    return {
        ...state,
        editing: !state.editing
    }
}

export {
    setBoard,
    setEditingMode
}