import { FC, PropsWithChildren } from 'react'

import { ProjectBlock } from '@/components/ProjectBlock'
import { WorkBlock } from '@/components/WorkBlock'

export const KolibriJob: FC<PropsWithChildren> = () => {
  return (
    <div id="kolibri">
      <WorkBlock
        reverse
        years="2014-2016"
        name="Kolibri"
        about="Разработка и поддержка коммерческих сервисов, e-commerce проектов и функциональных решений"
        position="Front-end разработчик"
      >
        <ProjectBlock
          name="АО Прокатмонтаж"
          whatsDone={[
            'Кроссбраузерная / адаптивная верстка',
            'Интеграция jQuery плагинов',
            'Реализация страницы регионы',
            'Помощь в интеграции с CMS Bitrix',
          ]}
          stack={['HTML5', 'CSS3', 'jQuery', 'Gulp', 'BitBucket']}
        />

        <ProjectBlock
          name="Трезвею.ру"
          whatsDone={[
            'Кроссбраузерная / адаптивная верстка внутренних страниц',
            'Интеграция jQuery плагинов',
            'Поддержка существующего кода',
          ]}
          stack={['HTML5', 'CSS3', 'jQuery', 'Gulp', 'BitBucket']}
        />

        <ProjectBlock
          name="IKEA MGN"
          whatsDone={[
            'Кроссбраузерная / адаптивная верстка внутренних страниц',
            'Интеграция jQuery плагинов',
            'Поддержка существующего кода',
          ]}
          stack={['HTML5', 'CSS3', 'jQuery', 'Gulp', 'BitBucket']}
        />

        <ProjectBlock
          name="Kolibri group"
          whatsDone={['Реализация блока "Дизайн, разработка и поддержка "']}
          stack={['HTML5', 'CSS3', 'jQuery', 'Gulp', 'BitBucket']}
        />
      </WorkBlock>
    </div>
  )
}
