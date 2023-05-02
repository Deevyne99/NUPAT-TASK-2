import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Container from '../container/Container'

const Dashboard = ({ sidebar, SidebarOpen }) => {
  return (
    <section className='flex flex-col w-full bg-[#FCFBFC] overflow-hidden'>
      {sidebar && (
        <div
          className={`${
            sidebar
              ? 'fixed lg:absolute bg-[#000] top-0 left-0 w-full z-10 h-full bg-opacity-50'
              : 'hidden'
          } lg:hidden`}
        ></div>
      )}
      <Navbar sidebar={sidebar} SidebarOpen={SidebarOpen} />
      <Container />
    </section>
  )
}

export default Dashboard
