import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Main } from '../main'
import { AboutMe } from '../module/aboutMe/components/AboutMe'
import { Skills } from '../module/skills'
import { Home } from '../screen/components/home/Home'

export const Routers: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/' element={<Main />}>
          <Route index element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
        </Route>
      </Route>
    </Routes>
  )
}
