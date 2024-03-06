import s from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <ul className={s.root}>
      <li>
        <a href="https://telegram.me/GruFFix ">Telegram</a>
      </li>
      <li>
        <a href="mailto:GruFFix@yandex.ru">E-mail</a>
      </li>
      <li>
        <a
          href="https://career.habr.com/kirill-lomanov"
          target="_blank"
          rel="noreferrer"
        >
          Хабр
        </a>
      </li>
      <li>
        <a href="https://github.com/GruFFix" target="_blank" rel="noreferrer">
          Github
        </a>
      </li>
    </ul>
  )
}
