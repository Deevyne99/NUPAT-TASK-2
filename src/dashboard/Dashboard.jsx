import React from 'react'
import Navbar from '../navbar/Navbar'
import Container from '../container/Container'

const Dashboard = () => {
  return (
    <section className='flex flex-col w-full bg-[#FCFBFC]'>
      <Navbar />
      <Container />
    </section>
  )
}

export default Dashboard
