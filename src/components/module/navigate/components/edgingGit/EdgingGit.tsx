import { FC } from 'react'

import iGit from '../../../../../assets/iGit.jpeg'

import './edgingGit.css'
export const EdgingGit: FC = () => {
  return (
    <div className='w-[80%] h-[20%] m-auto flex flex-col justify-end'>
      <div className='relative w-full flex items-center flex-col'>
        <div className='w-[5rem] border-[0.5rem] border-[#787BFE]  absolute top-[-4rem] rounded-full git_info_container'>
          <img className='w-full rounded-full' src={iGit} />
        </div>
      </div>
      <div className='border-[#787BFE] bg-[#787BFE] git_info_container text-center'>
        <div className='text-white text-lg mt-5'>Magomed M</div>
        <div className='text-[#5355c4] text-sm mt-1'>Фронтенд Разработчик</div>
        <div className='text-[#5355c4] text-sm mt-1'>19 лет</div>
      </div>
    </div>
  )
}
