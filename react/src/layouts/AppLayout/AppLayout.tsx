import { FC } from 'react'
import { Outlet } from 'react-router'

import s from './AppLayout.module.scss'

export const AppLayout: FC = () => {
  return (
    <div className={s.root}>
      <Outlet />
    </div>
  )
}
