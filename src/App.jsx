import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './dashboard/Dashboard'

function App() {
  const [sidebar, setSidebar] = useState(false)
  const SidebarOpen = () => {
    setSidebar((prev) => !prev)
  }

  // useEffect(() => {
  //   // const handleWindowClick = () => setSidebar(true)
  //   if (sidebar) {
  //     window.addEventListener('click', () => setSidebar(false))
  //   }
  //   // return () => window.removeEventListener('click', () => setSidebar(true))
  // }, [sidebar, setSidebar])

  return (
    <div className='flex w-full '>
      <div className=''>
        <Sidebar
          sidebar={sidebar}
          setSidebar={setSidebar}
          SidebarOpen={SidebarOpen}
        />
      </div>
      <div className='w-full'>
        <Dashboard
          sidebar={sidebar}
          setSidebar={setSidebar}
          SidebarOpen={SidebarOpen}
        />
      </div>
    </div>
  )
}

export default App
