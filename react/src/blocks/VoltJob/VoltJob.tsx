import { FC, PropsWithChildren } from 'react'

import { ProjectBlock } from '@/components/ProjectBlock'
import { WorkBlock } from '@/components/WorkBlock'

export const VoltJob: FC<PropsWithChildren> = () => {
  return (
    <WorkBlock
      years="2016-2018"
      name="Volt"
      about="Международная команда разработчиков мобильных и веб-приложений"
      position="Front-end разработчик"
    >
      <ProjectBlock
        name="Homebees"
        whatsDone={[
          'Рефакторинг существующего кода',
          'Создание новых компонентов',
          'Сопровождение продукта, устранение багов, реализация новых фич.',
          'Правка существующего интерфейса (Haml)',
        ]}
        stack={[
          'React',
          'Mobx',
          'Mobx-model',
          'CSS3',
          'jQuery',
          'Webpack',
          'JSON API',
          'SASS',
        ]}
      />

      <ProjectBlock
        name="Trove"
        whatsDone={[
          'Создание и поддержка CMS для управления проектом',
          'Интеграция с внешними сервисами (PusherJS / Airbrake / Urban Airship)',
          'Создание landing page для регистрации блогеров',
        ]}
        stack={[
          'React',
          'Mobx',
          'Mobx-model',
          'CSS3',
          'jQuery',
          'Webpack',
          'JSON API',
          'SASS',
        ]}
      />

      <ProjectBlock
        name="Trove (mobile app)"
        whatsDone={[
          'Реализация внутренних разделов приложения',
          'Интеграция сторонних модулей',
          'Интеграция с внешними сервисами (Urban Airship / Fabric / Firebase)',
        ]}
        stack={['React', 'React Native', 'Mobx', 'Mobx-model', 'JSON API']}
      />

      <ProjectBlock
        name="Cross Сlear / Trove Auth"
        whatsDone={[
          'Реализовал клиентскую часть для микросервиса авторизации / регистрации пользователей.',
        ]}
        stack={[
          'React',
          'Mobx',
          'Mobx-model',
          'CSS3',
          'jQuery',
          'Webpack',
          'JSON API',
          'SASS',
        ]}
      />

      <ProjectBlock
        name="Cross Music / Cross Researcher"
        whatsDone={[
          'Реализация внутренних разделов приложения',
          'Интеграция сторонних модулей',
          'Помощь в реализация сложного поиска по моделям',
          'Адаптивная / резиновая верстка с использованием миксина SASS',
        ]}
        stack={[
          'React',
          'Mobx',
          'Mobx-model',
          'CSS3',
          'jQuery',
          'Webpack',
          'JSON API',
          'SASS',
        ]}
      />

      <ProjectBlock
        name="Sales Cockpit "
        whatsDone={[
          'Реализация внутренних разделов приложения',
          'Интеграция сторонних модулей (Twilio)',
          'Адаптивная / резиновая верстка с использованием миксина SASS',
        ]}
        stack={[
          'React',
          'Mobx',
          'Mobx-model',
          'CSS3',
          'jQuery',
          'Webpack',
          'JSON API',
          'SASS',
        ]}
      />
    </WorkBlock>
  )
}
