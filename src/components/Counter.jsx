import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>{count}</p>
      {count > 0 && (
        <button type='button' onClick={decrement}>
          -
        </button>
      )}
      <button type='button' onClick={increment}>
        +
      </button>
      {count % 2 === 0 ? <p>Is even !</p> : <p>Is odd !</p>}
    </>
  )
}

export default Counter
