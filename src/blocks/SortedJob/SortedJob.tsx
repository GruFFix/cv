import { FC, PropsWithChildren } from 'react'

import { ProjectBlock } from '@/components/ProjectBlock'
import { WorkBlock } from '@/components/WorkBlock'

export const SortedJob: FC<PropsWithChildren> = () => {
  return (
    <WorkBlock
      years="2019-2022"
      name="Sorted"
      about="-"
      position="Front-end разработчик (Tech lead)"
    >
      <ProjectBlock
        name="RUSSKIEYARMARKI.RU"
        whatsDone={[
          'Управление командой разработчиков: Руководство и координация деятельности команды из 5 специалистов, фокусируясь на разработке и оптимизации frontend-процессов.',
          'Проведение технических собеседований: Отбор и оценка кандидатов для формирования высококвалифицированной команды разработчиков.',
          'Разработка интерфейсов: Проектирование и реализация пользовательских интерфейсов, включая личные кабинеты купца и администратора, обеспечивая интуитивное и эффективное взаимодействие пользователей с системой.',
          'Микросервисная архитектура: Разработка микросервиса авторизации, улучшая безопасность и масштабируемость платформы.',
          'UI Kit: Создание и поддержка комплекта пользовательского интерфейса, стандартизируя элементы дизайна и упрощая процесс разработки.',
          'Работа с Canvas: Применение HTML5 Canvas для разработки динамических и интерактивных графических элементов.',
          'Конфигурация Webpack: Настройка и оптимизация сборки проектов с использованием Webpack 5, повышая эффективность и производительность разработки.',
        ]}
        stack={[
          'React',
          'TypeScript',
          'Mobx',
          'SCSS',
          'HTML5',
          'CSS3',
          'Webpack5',
          'Module Federation',
          'React-hook-form',
          'React-Spring',
          'Socket.io',
        ]}
      />
    </WorkBlock>
  )
}