import React from 'react'
import participants from '../assets/participant.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import list from '../assets/list.png'
import power from '../assets/power.png'
import board from '../assets/board.png'
import plus from '../assets/plus-vector.png'
import menu from '../assets/menu.png'
const Navbar = ({ SidebarOpen }) => {
  return (
    <header className='relative py-8 bg-[#fff]  '>
      <button
        className='absolute right-4 top-4 lg:hidden '
        onClick={SidebarOpen}
      >
        <img src={menu} alt='' />
      </button>
      <div className='relative flex flex-col mx-4 mt-4 lg:mt-0'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
          <article className='gap-2'>
            <h2
              className={`text-3xl font-bold font-inter text-center lg:text-left`}
            >
              New Campaign Run{' '}
            </h2>
            <p className='text-grayColor text-sm mt-1 font-inter text-center lg:text-left'>
              A new campaign launch work for brand new featur in May month
            </p>
          </article>
          <div>
            <button className=' text-center rounded-md  bg-[#000] text-[#fff] text-sm p-3 w-[150px] uppercase font-inter'>
              add members
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center mt-16 flex-wrap gap-4'>
          <div className='flex  gap-2 items-center '>
            <img className='xl:hidden' src={user1} alt='' />
            <img className='xl:flex hidden' src={user2} alt='' />
            <p className='text-grayColor font-inter'>8 member</p>
          </div>
          <ul className='flex gap-4 text-[#7D8088] font-inter flex-wrap '>
            <li className='flex gap-1 items-center'>
              <img src={participants} alt='' />
              <a href='#0' className='capitalize text-sm'>
                participant view
              </a>
            </li>
            <li className='flex gap-1 items-center'>
              <img src={board} alt='' />
              <a href='#0' className='capitalize text-sm'>
                board view
              </a>
            </li>
            <li className='flex gap-1 items-center'>
              <img src={list} alt='' />
              <a href='#0' className='capitalize text-sm'>
                list view
              </a>
            </li>
            <li className='flex gap-1 items-center'>
              <img src={power} alt='' />
              <a href='#0' className='capitalize text-sm'>
                power view
              </a>
            </li>
            <li className='flex gap-1 items-center'>
              <img src={plus} alt='' />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
