import { type FC } from 'react'

import { Contact } from '../contact/Contact'
import { EdgingGit } from '../edgingGit/EdgingGit'

import { NavigateLink } from './components/NavigateLink'

import './navIcon.css'
export const NavIcon: FC = () => {
  return (
    <div className='w-[100%] h-[90%] flex flex-col items-center'>
      <EdgingGit />
      <div className='w-[100%] relative'>
        <NavigateLink />
      </div>
      <Contact />
    </div>
  )
}
