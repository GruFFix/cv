import { FC, PropsWithChildren } from 'react'

import { ProjectBlock } from '@/components/ProjectBlock'
import { WorkBlock } from '@/components/WorkBlock'

export const HumandoneJob: FC<PropsWithChildren> = () => {
  return (
    <WorkBlock
      years="2023-2024"
      name="Humandone"
      about="Кровавый аутсорс с человеческим лицом. Рисуем дизайн. Пишем код на React и Node.js. Умеем в крипту (web3)"
      position="Ведущий Front-end разработчик"
    >
      <ProjectBlock
        name="Kamino"
        whatsDone={[
          'Разработка UI-кита: Заменил Ant Design на собственный uiKit, улучшив стилистику и уникальность приложения, а также пользовательский опыт.',
          'Архитектура приложения: Спроектировал архитектуру для масштабируемости и надёжности, улучшая производительность и облегчая поддержку.',
          'Оптимизация производительности и архитектуры: Инициатива и успешная реализация перехода с Redux на React Query для повышения эффективности и упрощения управления состоянием приложения. Устранение избыточных библиотек и интеграция собственных решений для оптимизации производительности и уменьшения зависимостей.',
          'Декомпозиция и рефакторинг: Разработка переиспользуемых хуков для декомпозиции сложных расчетов, улучшение читаемости и поддержки кода.',
          'Разработка интерактивных чартов: Создание настраиваемых и интерактивных чартов с использованием Canvas и SVG. Разработка адаптировалась к специфическим требованиям бизнеса, обеспечивая не только визуальную привлекательность, но и функциональную полноценность. Применение инструментов искусственного интеллекта (включая GPT) для улучшения процесса разработки и достижения более высоких результатов.',
          'Внедрение код-ревью: Инициировал процесс код-ревью, улучшив качество кода, обмен знаниями и сотрудничество в команде.',
        ]}
        stack={[
          'React',
          'TypeScript',
          'SCSS',
          'HTML5',
          'CSS3',
          'Redux',
          'React-hook-form',
          'Vite',
        ]}
      />
    </WorkBlock>
  )
}
