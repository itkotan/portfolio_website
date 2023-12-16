import { type FC } from 'react'

import { Main } from '../../../main'
import { Nav } from '../../../module/navigate'

export const Home: FC = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center '>
      <div className='flex justify-between w-[75rem] h-[85%]  mmw:h-[75%] mmsw:h-[65%] msw:h-[55%]'>
        <Nav />
        <Main />
      </div>
    </div>
  )
}
