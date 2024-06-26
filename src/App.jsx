import './App.css'
import { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RGBText from './components/RGBText'
import Counter from './components/Counter'

const studentsData = [{ name: 'Thomas' }, { name: 'Igor' }, { name: 'Maria' }]

function App() {
  const [students, setStudents] = useState(
    studentsData.map(currentStudent => ({ ...currentStudent, id: uuidv4() }))
  )
  /* const [isMenuOpen, setIsMenuOpen] = useState(false) */

  return (
    <div>
      <Counter />

      <RGBText />
      {['hey', 'hello', 'hello'].map(el => (
        <p key={el}>{el}</p>
      ))}
      {/* [{ name: 'Thomas' }, { name: 'Igor' }, { name: 'Maria' }] */}
      {students
        .filter(currentStudent => currentStudent.name === 'Thomas')
        .map(currentStudent => (
          <Fragment key={currentStudent.id}>
            <p id={currentStudent.id}>{currentStudent.name}</p>
            <p>{currentStudent.name}</p>
          </Fragment>
        ))}
    </div>
  )
}

export default App
