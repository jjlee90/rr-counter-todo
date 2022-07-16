import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
// destructure actions from slice
import { decrement, increment, incrementByAmount } from "./counterSlice"

function Counter() {
  // Call useSelector to grab the current value of our state variable
  // from the store, and assign it to a variable named "count"
  let count = useSelector((state) => state.counter.value)
  // And include the useDispatch hook...
  const dispatch = useDispatch()
  // set state to 0
  const [input, setInput] = useState(0)

  // Inside of our Counter component:
  const byAmountSubmit = (e) => {
    e.preventDefault()

    dispatch(incrementByAmount(Number(input)))
  }

  return (
    <div>
      <h1>{count}</h1>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <form onSubmit={(e) => byAmountSubmit(e)}>
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Counter
