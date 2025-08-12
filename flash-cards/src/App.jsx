import React, { useState } from 'react'
import Header from './components/Header'
import FlashCard from './components/FlashCard'

function App() {

  const [sharedData, setSharedData] = useState(0); // State to share between components

  return (
    <div className='h-[700px] w-[600px]  flex items-center justify-center flex-col'>
        <Header sharedData={sharedData}   />
        <FlashCard   sharedData={sharedData} setSharedData={setSharedData}/>
    </div>
  )
}

export default App
