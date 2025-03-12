import { useState } from 'react'
import './App.css'
import DiaryCanvas from './DiaryCanvas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-container'>
        <div className='main-container'>
          <DiaryCanvas/>
        </div>
      </div>
    </>
  )
}

export default App;
