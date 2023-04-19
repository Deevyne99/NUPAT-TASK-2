import React from 'react'
import participants from '../assets/participant.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import list from '../assets/list.png'
import power from '../assets/power.png'
import board from '../assets/board.png'
import plus from '../assets/plus-vector.png'
const Navbar = () => {
  return (
    <header className=' py-8 bg-[#fff] '>
      <div className='flex flex-col mx-12'>
        <div className='flex justify-between items-center'>
          <article>
            <h2 className={`text-3xl font-bold font-inter`}>
              New Campaign Run{' '}
            </h2>
            <p className='text-grayColor text-sm mt-1 font-inter'>
              A new campaign launch work for brand new featur in May month
            </p>
          </article>
          <div>
            <button className=' text-center rounded-md  bg-[#000] text-[#fff] text-sm p-3 w-[150px] uppercase font-inter'>
              add members
            </button>
          </div>
        </div>
        <div className='flex justify-between mt-16'>
          <div className='flex  gap-2 items-center'>
            <img className='xl:hidden' src={user1} alt='' />
            <img className='xl:flex hidden' src={user2} alt='' />
            <p className='text-grayColor font-inter'>8 member</p>
          </div>
          <ul className='flex gap-4 text-[#7D8088] font-inter'>
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
