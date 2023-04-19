import React from 'react'
import todo1 from '../assets/todo1.png'
import todo2 from '../assets/todo2.png'
import todo3 from '../assets/todo3.png'
import inprogress1 from '../assets/inprogress1.png'
import inprogress2 from '../assets/inprogress2.png'
import inprogress3 from '../assets/inprogress3.png'
import completed1 from '../assets/completed1.png'
import completed2 from '../assets/completed2.png'
import completed3 from '../assets/completed3.png'
import dot from '../assets/dot.png'
import preview from '../assets/preview.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import chat from '../assets/chat.png'
import file from '../assets/file.png'
import plus from '../assets/plus-vector.png'
import Button from '../button/Button'
import Description from '../description/Description'
const Container = () => {
  return (
    <section className='h-full py-12 mb-36'>
      <div className='mx-12 flex items-start gap-8'>
        <div className='w-4/12  flex flex-col'>
          <Description text={'to do'} number={3} />
          <article className='flex flex-col p-3 mt-4 bg-[#fff] rounded-lg'>
            <div className='w-full'>
              <img src={todo1} alt='' className='xl:hidden flex w-full' />
              <img
                src={todo2}
                alt=''
                className='hidden xl:flex 2xl:hidden w-full'
              />
              <img src={todo3} alt='' className='hidden 2xl:flex w-full' />
            </div>
            <div className='flex mt-3 justify-between items-center '>
              <h5 className='font-bold  text-lg'>Highfidelity Design</h5>
              <img src={dot} alt='' />
            </div>
            <p className='text-sm text-grayColor mt-1'>
              Make clear design and color
            </p>
            <div className='flex mt-2  flex-col'>
              <div className='flex justify-between'>
                <div className='flex gap-1 items-center'>
                  <img src={preview} alt='' />
                  <p className='capitalize'>progress</p>
                </div>
                <p className='font-semibold'>2/10</p>
              </div>
              <div className='h-2 mt-2 w-full bg-[#EBEBEB] rounded-full'></div>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <div className='flex gap-1 items-center '>
                <div className='flex gap-4 items-center'>
                  <div className='flex gap-1 items-center '>
                    <img src={chat} alt='' />
                    <p className='text-sm text-grayColor'>7</p>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <img src={file} alt='' />
                    <p className='text-sm text-grayColor'>2</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={user1} alt='' />
              </div>
            </div>
          </article>

          <div className='flex flex-col bg-[#fff] mt-3 p-3 rounded-lg'>
            <div className='flex  justify-between items-center '>
              <h5 className='font-bold  text-lg'>Usability testing</h5>
              <img src={dot} alt='' />
            </div>
            <div className='flex mt-2  flex-col'>
              <div className='flex justify-between'>
                <div className='flex gap-1 items-center'>
                  <img src={preview} alt='' />
                  <p className='capitalize'>progress</p>
                </div>
                <p className='font-semibold'>2/10</p>
              </div>
              <div className='h-2 mt-2 w-full bg-[#EBEBEB] rounded-full'></div>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <div className='flex gap-1 items-center '>
                <div className='flex gap-4 items-center'>
                  <div className='flex gap-1 items-center '>
                    <img src={chat} alt='' />
                    <p className='text-sm text-grayColor'>7</p>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <img src={file} alt='' />
                    <p className='text-sm text-grayColor'>2</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={user1} alt='' />
              </div>
            </div>
          </div>

          <Button />
        </div>
        <div className='w-4/12  flex flex-col'>
          <Description text={'inprogress}'} number={1} />
          <article className='flex flex-col p-3 mt-4 bg-[#fff] rounded-lg'>
            <div className='w-full'>
              <img src={inprogress1} alt='' className='xl:hidden flex w-full' />
              <img
                src={inprogress2}
                alt=''
                className='hidden xl:flex 2xl:hidden w-full'
              />
              <img
                src={inprogress3}
                alt=''
                className='hidden 2xl:flex w-full'
              />
            </div>
            <div className='flex mt-3 justify-between items-center '>
              <h5 className='font-bold  text-lg'>Highfidelity Design</h5>
              <img src={dot} alt='' />
            </div>
            <p className='text-sm text-grayColor mt-1'>
              Make clear design and color
            </p>
            <div className='flex mt-2  flex-col'>
              <div className='flex justify-between'>
                <div className='flex gap-1 items-center'>
                  <img src={preview} alt='' />
                  <p className='capitalize'>progress</p>
                </div>
                <p className='font-semibold'>2/10</p>
              </div>
              <div className='h-2 mt-2 w-full bg-[#EBEBEB] rounded-full'>
                <div
                  style={{ width: `${55}%` }}
                  className={`h-full ${
                    55 < 70 ? 'bg-[#FF5F37]' : 'bg-[#EBEBEB]'
                  } rounded-l-full`}
                ></div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <div className='flex gap-1 items-center '>
                <div className='flex gap-4 items-center'>
                  <div className='flex gap-1 items-center '>
                    <img src={chat} alt='' />
                    <p className='text-sm text-grayColor'>7</p>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <img src={file} alt='' />
                    <p className='text-sm text-grayColor'>2</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={user1} alt='' />
              </div>
            </div>
          </article>
          <Button />
        </div>
        <div className='w-4/12  flex flex-col'>
          <Description text={'completed'} number={7} />
          <div className='flex flex-col bg-[#fff] mt-3 p-3 rounded-lg'>
            <div className='flex  justify-between items-center '>
              <h5 className='font-bold  text-lg'>Usability testing</h5>
              <img src={dot} alt='' />
            </div>
            <div className='flex mt-2  flex-col'>
              <div className='flex justify-between'>
                <div className='flex gap-1 items-center'>
                  <img src={preview} alt='' />
                  <p className='capitalize'>progress</p>
                </div>
                <p className='font-semibold'>2/10</p>
              </div>
              <div className='h-2 mt-2 w-full bg-[#EBEBEB] rounded-full'>
                <div
                  style={{ width: `${100}%` }}
                  className={`h-full ${
                    100 ? 'bg-[#8BC488]' : 'bg-[#EBEBEB]'
                  } rounded-full`}
                ></div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <div className='flex gap-1 items-center '>
                <div className='flex gap-4 items-center'>
                  <div className='flex gap-1 items-center '>
                    <img src={chat} alt='' />
                    <p className='text-sm text-grayColor'>7</p>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <img src={file} alt='' />
                    <p className='text-sm text-grayColor'>2</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={user1} alt='' />
              </div>
            </div>
          </div>
          <article className='flex flex-col p-3 mt-4 bg-[#fff] rounded-lg'>
            <div className='w-full'>
              <img src={completed1} alt='' className='xl:hidden flex w-full' />
              <img
                src={completed2}
                alt=''
                className='hidden xl:flex 2xl:hidden w-full'
              />
              <img src={completed3} alt='' className='hidden 2xl:flex w-full' />
            </div>
            <div className='flex mt-3 justify-between items-center '>
              <h5 className='font-bold  text-lg'>Highfidelity Design</h5>
              <img src={dot} alt='' />
            </div>
            <p className='text-sm text-grayColor mt-1'>
              Make clear design and color
            </p>
            <div className='flex mt-2  flex-col'>
              <div className='flex justify-between'>
                <div className='flex gap-1 items-center'>
                  <img src={preview} alt='' />
                  <p className='capitalize'>progress</p>
                </div>
                <p className='font-semibold'>2/10</p>
              </div>
              <div className='h-2 mt-2 w-full bg-[#EBEBEB] rounded-full'>
                <div
                  style={{ width: `${100}%` }}
                  className={`h-full ${
                    100 ? 'bg-[#8BC488]' : 'bg-[#EBEBEB]'
                  } rounded-full`}
                ></div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <div className='flex gap-1 items-center '>
                <div className='flex gap-4 items-center'>
                  <div className='flex gap-1 items-center '>
                    <img src={chat} alt='' />
                    <p className='text-sm text-grayColor'>7</p>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <img src={file} alt='' />
                    <p className='text-sm text-grayColor'>2</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={user1} alt='' />
              </div>
            </div>
          </article>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default Container
