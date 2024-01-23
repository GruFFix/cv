import { FC, PropsWithChildren } from 'react'

import { ProjectBlock } from '@/components/ProjectBlock'
import { WorkBlock } from '@/components/WorkBlock'

export const FrontBandJob: FC<PropsWithChildren> = () => {
  return (
    <WorkBlock
      reverse
      years="2018-2019"
      name="Front.Band"
      about="-"
      position="Front-end разработчик (Tech lead)"
    >
      <ProjectBlock
        name="Alfa Bank Украина"
        whatsDone={[
          'Рефакторинг существующего кода',
          'Декомпозиция компонентов',
          'Создание нового функционала.',
          'Разработка uiKit',
          'Управление командой из 3-х разработчиков (junior)',
        ]}
        stack={[
          'React',
          'Redux',
          'HTML5',
          'CSS3',
          'jQuery',
          'Webpack',
          'StoryBook',
          'SASS',
        ]}
      />

      <ProjectBlock
        name="Playces"
        whatsDone={[
          'Реализация компонентов',
          'Интеграция и сложная кастомизация big calendar',
          'Взаимодействие с бекендом',
        ]}
        stack={[
          'React',
          'Redux',
          'HTML5',
          'CSS3',
          'jQuery',
          'Webpack',
          'StoryBook',
          'SASS',
        ]}
      />
    </WorkBlock>
  )
}
