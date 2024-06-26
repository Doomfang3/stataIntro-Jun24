import { useState } from 'react'

const RGBText = () => {
  const [textColor, setTextColor] = useState('white')

  return (
    <div>
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
    </div>
  )
}

export default RGBText
