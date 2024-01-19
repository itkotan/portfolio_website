import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

import hoverSound from '../../../../../../assets/audio/hover.mp3'
import contact from '../../../../../../assets/contact.png'
import folder from '../../../../../../assets/folder.png'
import profile from '../../../../../../assets/profile.png'
import skills from '../../../../../../assets/skills.png'
import timeline from '../../../../../../assets/timeline.png'

export const NavigateLink: FC = () => {
  const classLi = 'w-[100%] mb-7 flex  items-center'
  const classImg = 'w-[100%]'
  const classButton = 'color_icons w-[100%] flex items-center'
  const [position, setPosition] = useState(4)
  const playHoverSound = () => {
    const audio = new Audio(hoverSound)
    void audio.play()
  }
  const playClickSound = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const buttonElement = e.target as HTMLButtonElement
    setPosition(buttonElement.offsetTop)
  }
  return (
    <>
      <div
        className={`w-[3px] h-[30px] bg-[#787BFE] absolute right-0 slider`}
        style={{ top: `${position}px` }}
      ></div>
      <ul className='w-[80%] flex items-center flex-col m-auto nav_container'>
        <li className={classLi}>
          <NavLink
            to={'/'}
            className={classButton}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <div className='w-[2rem]'>
              <img src={profile} className={classImg} />
            </div>
            <div className='text-white ml-3'>Обо мне</div>
          </NavLink>
        </li>
        <li className={classLi}>
          <NavLink
            to={'/skills'}
            className={classButton}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <div className='w-[2rem]'>
              <img src={skills} className={classImg} />
            </div>
            <div className='text-white  ml-3'>Мои навыки</div>
          </NavLink>
        </li>
        <li className={classLi}>
          <NavLink
            to={'/'}
            className={classButton}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <div className='w-[2rem]'>
              <img src={folder} className={classImg} />
            </div>
            <div className='text-white ml-3'>Мои проекты</div>
          </NavLink>
        </li>
        <li className={classLi}>
          <NavLink
            to={'/'}
            className={classButton}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <div className='w-[2rem]'>
              <img src={timeline} className={classImg} />
            </div>
            <div className='text-white ml-3'>Таймлайн</div>
          </NavLink>
        </li>
        <li className={classLi}>
          <NavLink
            to={'/'}
            className={classButton}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <div className='w-[2rem]'>
              <img src={contact} className={classImg} />
            </div>
            <div className='text-white ml-3'>Контакты</div>
          </NavLink>
        </li>
      </ul>
    </>
  )
}
