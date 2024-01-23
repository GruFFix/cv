import s from './Years.module.scss'
import { NavLink } from 'react-router-dom'

import ScrollContainer from 'react-indiana-drag-scroll'

export const Years = () => {
  return (
    <ScrollContainer className={s.root}>
      <NavLink to="#kolibri">2014</NavLink>
      <NavLink to="#kolibri">2016</NavLink>
      <NavLink to="#kolibri">2018</NavLink>
      <NavLink to="#kolibri">2019</NavLink>
      <NavLink to="#kolibri">2022</NavLink>
      <NavLink to="#kolibri">2023</NavLink>
    </ScrollContainer>
  )
}
