import React from 'react'
import plus from '../assets/plus-vector.png'
const Button = () => {
  return (
    <button className='flex items-center justify-center gap-2 capitalize mt-3 border-dashed border-[2px] border-[#D5D5D5] rounded-md text-[#7D8088] bg-[#F2F4F5] p-2 font-inter'>
      <img src={plus} alt='' /> add task
    </button>
  )
}

export default Button
