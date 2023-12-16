import { type FC } from 'react'

import { NavIcon } from './navIcon/NavIcon'

import './nav.css'
export const Nav: FC = () => {
  return (
    <nav className='bg-[#1A1A1A] w-[17rem] h-full rounded-2xl enlargement_sideways_and_straight flex justify-center items-center'>
      <NavIcon />
    </nav>
  )
}
