import React from 'react'

const Description = ({ text, number }) => {
  return (
    <div className='bg-grey py-2 px-4 rounded-md flex justify-between items-center font-inter'>
      <p className='capitalize text-textGrey'>{text}</p>
      <span className='p-2 w-[40px] text-center rounded-md  bg-[#000] text-[#fff]'>
        {number}
      </span>
    </div>
  )
}

export default Description
