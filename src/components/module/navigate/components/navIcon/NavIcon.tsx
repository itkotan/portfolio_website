import { type FC } from 'react'

import { Contact } from '../contact/Contact'
import { EdgingGit } from '../edgingGit/edgingGit'

import { NavigateLink } from './components/NavigateLink'

import './navIcon.css'
export const NavIcon: FC = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col'>
      <EdgingGit />
      <div className='w-[80%] m-auto text-white text-sm'>Меню</div>
      <div className='relative'>
        <NavigateLink />
      </div>
      <Contact />
    </div>
  )
}
