import s from './AboutMe.module.scss'
import { TypeAnimation } from 'react-type-animation'
import { Contacts } from '@/blocks/Contacts'
export const AboutMe = () => {
  return (
    <section className={s.root}>
      <h1 className={s.title}>
        Привет, меня зовут Кирилл. <br /> Я занимаюсь FRONT END разработкой
        <br />
        <span>более 9 лет.</span>
      </h1>

      <div className={s.typing}>
        <TypeAnimation
          sequence={[
            'Mobx',
            500,
            'React',
            500,
            'HTML',
            500,
            'Webpack',
            500,
            'JavaScript',
            500,
            'CSS',
            500,
            'React Hooks',
            500,
            'Module Federation',
            500,
            'Vite',
            500,
            'TanStack Query',
            500,
            'TanStack Table',
            500,
            'TanStack Form',
            500,
            'Storybook',
            500,
            'Antd',
            500,
            'Less',
            500,
            'TypeScript',
            500,
            'Redux',
            500,
            'jQuery',
            500,
            'Web3',
            500,
          ]}
          repeat={Infinity}
        />
      </div>

      <Contacts />
    </section>
  )
}
