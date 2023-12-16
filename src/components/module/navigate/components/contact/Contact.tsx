import { FC } from 'react'

import gitHub from '../../../../../assets/gitHub.png'
import sv from '../../../../../assets/sv.png'
import telegram from '../../../../../assets/telegram.png'

export const Contact: FC = () => {
  const styleLi = 'w-[4rem] flex items-center justify-center'
  return (
    <div className='w-[80%] m-auto border-2 rounded-lg py-3'>
      <ul className='flex justify-between'>
        <li className={`${styleLi} border-r-2`}>
          <div className='w-[1.5rem]'>
            <img className='w-full' src={gitHub} />
          </div>
        </li>
        <li className={`${styleLi} border-r-2`}>
          <div className='w-[1.5rem]'>
            <img className='w-full' src={sv} />
          </div>
        </li>
        <li className={styleLi}>
          <div className='w-[1.5rem]'>
            <img className='w-full' src={telegram} />
          </div>
        </li>
      </ul>
    </div>
  )
}
