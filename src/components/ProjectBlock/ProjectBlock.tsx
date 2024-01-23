import { FC, PropsWithChildren } from 'react'
import { ProjectBlockProps } from '@/shared/types.ts'

import s from './ProjectBlock.module.scss'

export const ProjectBlock: FC<PropsWithChildren<ProjectBlockProps>> = ({
  whatsDone,
  stack,
  name,
}) => {
  return (
    <article className={s.root}>
      <p className={s.name}>{name}</p>

      <ul className={s.whatsDone}>
        {whatsDone?.map((i, index) => <li key={index}>- {i}</li>)}
      </ul>

      <p className={s.stackTitle}>Стек:</p>

      <ul className={s.stack}>
        {stack?.map((i, index) => <li key={index}>{i}</li>)}
      </ul>
    </article>
  )
}
