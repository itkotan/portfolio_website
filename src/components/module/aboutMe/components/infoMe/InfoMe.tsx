import { FC } from 'react'

import { HeaderInfo } from './components/header/HeaderInfo'
import { MainInfo } from './components/mainInfo/MainInfo'

export const InfoMe: FC = () => {
  return (
    <div className='w-[90%] m-auto'>
      <HeaderInfo />
      <MainInfo />
    </div>
  )
}
