import { FC, PropsWithChildren } from 'react'
import { WorkBlockProps } from '@/shared/types.ts'

import s from './WorkBlock.module.scss'
import { withStyles } from '@bruitt/classnames'

const sx = withStyles(s)

export const WorkBlock: FC<PropsWithChildren<WorkBlockProps>> = ({
  name,
  about,
  children,
  position,
  years,
  reverse,
}) => {
  return (
    <div className={sx(s.root, { reverse })}>
      {/*<div className={s.side}>*/}
      {/*  <div className={s.years}>{years}</div>*/}
      {/*</div>*/}

      <article className={s.content}>
        <div className={s.header}>
          <h2 className={s.name}>
            {name}

            <span>({years})</span>
          </h2>
          <p className={s.about}>{about}</p>
          <p className={s.position}>{position}</p>
        </div>

        <section className={s.projects}>{children}</section>
      </article>
    </div>
  )
}
