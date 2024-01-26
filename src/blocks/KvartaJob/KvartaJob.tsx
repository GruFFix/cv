import { FC, PropsWithChildren } from 'react'

import { ProjectBlock } from '@/components/ProjectBlock'
import { WorkBlock } from '@/components/WorkBlock'

export const KvartaJob: FC<PropsWithChildren> = () => {
  return (
    <WorkBlock
      reverse
      years="2022-2023"
      name="Кварта(ПИК Брокер)"
      about="Инновационный сервис по выкупу и продаже недвижимости на вторичном рынке"
      position="Ведущий Front-end разработчик"
    >
      <ProjectBlock
        name="Кварта"
        whatsDone={[
          'Разработка front-end части проекта личного кабинета продавца/покупателя',
          'Разработка кросс-командного проекта uikit',
          'Проведение CodeReview',
        ]}
        stack={[
          'React',
          'TypeScript',
          'SCSS',
          'HTML5',
          'CSS3',
          'Next.js',
          'React-hook-form',
          'React-query',
        ]}
      />
    </WorkBlock>
  )
}
