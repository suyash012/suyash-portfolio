import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/leftpanel.jsx'
import Leftpanel from './components/leftpanel.jsx'
import Rightpanel from './components/rightpanel.jsx'
function App() {
  

  return (
    <>
      <div className=' flex flex-col md:flex-row'>
        <Leftpanel/>
        <Rightpanel/>
      </div>
    </>
  )
}

export default App
