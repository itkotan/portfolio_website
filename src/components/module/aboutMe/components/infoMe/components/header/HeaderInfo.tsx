import { FC } from 'react'

import iGit from '../../../../../../../assets/iGit.jpeg'

import './headerInfo.css'
export const HeaderInfo: FC = () => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='w-[5rem] border-[0.5rem] border-[#787BFE]    rounded-full git_info_container'>
          <img className='w-full rounded-full' src={iGit} />
        </div>
        <div className='ml-4 text-2xl text-neutral-400'>Чем я занимаюсь|</div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
