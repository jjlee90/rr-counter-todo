import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // spread items then add payload in array
    addTodo: (state, action) => {
      return { items: [...state.items, action.payload] }
    },
    // clear items in array
    clearTodos: () => {
      return { items: [] }
    },
  },
})

export const { addTodo, clearTodos } = todoSlice.actions

export default todoSlice.reducer
