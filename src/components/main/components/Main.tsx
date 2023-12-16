import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

import './main.css'

export const Main: FC = () => {
  return (
    <main className='bg-[#1A1A1A] w-[57rem] h-full rounded-2xl zoom_straight'>
      <Outlet />
    </main>
  )
}
