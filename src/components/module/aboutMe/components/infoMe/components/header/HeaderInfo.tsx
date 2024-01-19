import { FC } from 'react'

import iGit from '../../../../../../../assets/iGit.jpeg'

import './headerInfo.css'
export const HeaderInfo: FC = () => {
  return (
    <div className='flex justify-between relative'>
      <div className='flex items-center '>
        <div className='w-[5rem] border-[0.5rem] border-[#787BFE]    rounded-full git_info_container '>
          <img className='w-full rounded-full' src={iGit} />
        </div>
        <div
          className='text-lg text-white bg-[#787BFE] absolute left-[4.5rem] px-4 py-2 rounded-e-lg
        '
        >
          Чем я занимаюсь
        </div>
      </div>
      <ul className='flex w-[21%] justify-between items-center'>
        <li className='flex justify-center items-center'>
          <button className='w-[5rem] h-[2rem] git_info_container bg-[#787BFE] rounded-lg text-white text-sm text-center'>
            🇷🇺 РУ
          </button>
        </li>
        <li className='flex justify-center items-center'>
          <button className='w-[5rem] h-[2rem] git_info_container bg-[#787BFE]  rounded-lg text-white text-sm text-center'>
            🇬🇧 EN
          </button>
        </li>
      </ul>
    </div>
  )
}
