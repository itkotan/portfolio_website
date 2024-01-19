import { type FC } from 'react'
import { Outlet } from 'react-router-dom'


export const Main: FC = () => {
  return (
    <main className='bg-[#1A1A1A] w-[57rem] h-full rounded-2xl zoom_straight flex justify-center items-center'>
      <Outlet />
    </main>
  )
}
