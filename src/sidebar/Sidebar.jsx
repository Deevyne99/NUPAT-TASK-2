import React from 'react'
import Lightning from '../assets/Lightning.png'
import dashboard from '../assets/dashboard.png'
import settings from '../assets/settings.png'
import activities from '../assets/activities.png'
import users from '../assets/users.png'
import addUsers from '../assets/addUsers.png'
import affilate from '../assets/affilate.png'
import profile from '../assets/profile.png'
import logout from '../assets/logout.png'
import Plus from '../assets/Plus.png'
import close from '../assets/close-2.png'

const Sidebar = ({ sidebar, SidebarOpen }) => {
  return (
    <aside
      className={`bg-purple w-[230px] p-8   ${
        sidebar
          ? ' absolute transform translate-x-0 flex h-[1350px] duration-500'
          : 'absolute translate-x-[-300px] duration-500'
      } lg:translate-x-[0px] translate-x-[-300px]  lg:sticky  lg:flex flex-col top-0 left-0 h-full z-20 `}
    >
      <button
        className='absolute right-4 top-4 lg:hidden '
        onClick={SidebarOpen}
      >
        <img src={close} alt='' />
      </button>
      <div className='flex gap-1 items-center rounded-md lg:mt-0 mt-12  bg-lightPurple text-sm p-3'>
        <img src={Lightning} alt='Lighting' />
        <p className='text-[#fff] font-inter'>Welcome Keerthi</p>
      </div>
      <ul className='flex flex-col mt-10 gap-8 font-inter text-sm'>
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={dashboard} alt='' /> <a href='#0'>dashboard</a>
        </li>
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={settings} alt='' /> <a href='#0'>settings</a>
        </li>
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={activities} alt='' /> <a href='#0'>activities</a>
        </li>
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={users} alt='' /> <a href='#0'>users</a>
        </li>
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={addUsers} alt='' /> <a href='#0'>Added user</a>
        </li>
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={activities} alt='' /> <a href='#0'>activities</a>
        </li>
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={affilate} alt='' /> <a href='#0'>affilate</a>
        </li>
        <div className='w-full h-[1px] bg-[#fff] bg-opacity-50'></div>
        <li className='flex gap-2 items-center capitalize text-[#fff] text-opacity-75'>
          <img src={profile} alt='' className='opacity-75' />{' '}
          <a href='#0'>profile</a>
        </li>
        <li className='flex gap-2 items-center capitalize text-[#fff] text-opacity-75'>
          <img src={logout} alt='' className='opacity-75' />{' '}
          <a href='#0'>logout</a>
        </li>
      </ul>
      <div className='mt-80'>
        <button className='flex gap-1 items-center rounded-md  bg-veryLightPurple text-sm p-3 w-full font-inter'>
          <img src={Plus} alt='Lighting' />
          <p className='text-[#fff] uppercase'>new project</p>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
