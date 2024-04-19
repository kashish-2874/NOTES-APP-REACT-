import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Notes from './components/Notes'


function App() {
  

  return (
    <div className='main'>
      <Header/>
      <Notes/>
    </div>
  )
}

export default App
