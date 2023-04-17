import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './dashboard/Dashboard'

function App() {
  return (
    <div className='flex w-full '>
      <div className=''>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
