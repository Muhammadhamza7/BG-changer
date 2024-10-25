import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgColor from './components/BgColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BgColor/>
    </>
  )
}

export default App
