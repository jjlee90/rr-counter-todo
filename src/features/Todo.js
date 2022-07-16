import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, clearTodos } from "./todoSlice"

export default function Todo() {
  // grabbing items state from store and assign it to variable
  const todoItem = useSelector((state) => state.todo.items)
  // may be used to dispatch actions from slice
  const dispatch = useDispatch()
  // state to track input value
  const [todoInput, setTodoInput] = useState("")

  // on click function for submit
  const handleChange = (e) => {
    e.preventDefault()
    // add input to items array
    dispatch(addTodo(todoInput))
    // clear input
    setTodoInput("")
  }
  // render to do items
  const todoList = todoItem.map((item, i) => {
    return <li key={i}>{item}</li>
  })
  return (
    <div>
      <h2>To Do List</h2>
      {todoList}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={(e) => handleChange(e)} type="submit">
        Submit
      </button>
      {/* clear todo list */}
      <button onClick={() => dispatch(clearTodos())}>Clear</button>
    </div>
  )
}
