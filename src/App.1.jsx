import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { studentsData } from './App'

export function App() {
  const [count, setCount] = useState(0)
  const [textColor, setTextColor] = useState('white')
  const [students, setStudents] = useState(
    studentsData.map(currentStudent => ({ ...currentStudent, id: uuidv4() }))
  )
  /* const [isMenuOpen, setIsMenuOpen] = useState(false) */
  const decrement = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button type='button' onClick={decrement}>
        -
      </button>
      <button type='button' onClick={increment}>
        +
      </button>

      <p style={{ color: textColor }}>Hey there</p>
      <button type='button' onClick={() => setTextColor('red')}>
        red
      </button>
      <button type='button' onClick={() => setTextColor('green')}>
        green
      </button>
      <button type='button' onClick={() => setTextColor('blue')}>
        blue
      </button>
      {['hey', 'hello', 'hello'].map(el => (
        <p key={el}>{el}</p>
      ))}
      {/* [{ name: 'Thomas' }, { name: 'Igor' }, { name: 'Maria' }] */}
      {students.map(currentStudent => (
        <div key={currentStudent.id}>
          <p id={currentStudent.id}>{currentStudent.name}</p>
          <p>{currentStudent.name}</p>
        </div>
      ))}
    </div>
  )
}
