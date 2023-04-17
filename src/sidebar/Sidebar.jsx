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

const Sidebar = () => {
  return (
    <aside className='bg-purple w-[230px] p-8 sticky flex flex-col top-0 left-0 h-full'>
      <div className='flex gap-1 items-center rounded-md  bg-lightPurple text-sm p-3'>
        <img src={Lightning} alt='Lighting' />
        <p className='text-[#fff]'>Welcome Keerthi</p>
      </div>
      <ul className='flex flex-col mt-10 gap-8'>
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
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={profile} alt='' /> <a href='#0'>profile</a>
        </li>
        <li className='flex gap-2 items-center capitalize text-[#fff]'>
          <img src={logout} alt='' /> <a href='#0'>logout</a>
        </li>
      </ul>
      <div className='mt-80'>
        <div className='flex gap-1 items-center rounded-md  bg-veryLightPurple text-sm p-3'>
          <img src={Plus} alt='Lighting' />
          <p className='text-[#fff] uppercase'>new project</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
