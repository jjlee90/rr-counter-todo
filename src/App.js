import { counterSlice } from "./features/counterSlice"
import Counter from "./features/Counter"
import Todo from "./features/Todo"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  )
}

export default App
