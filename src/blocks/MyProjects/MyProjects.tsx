import s from './MyProjects.module.scss'

export const MyProjects = () => {
  return (
    <div className={s.root}>
      <a
        href="http://rsn.gruffix.ru"
        target="_blank"
        rel="noreferrer"
        className={s.link}
      >
        <img
          width={25}
          src="http://rsn.gruffix.ru/assets/cat-7M3wnJqg.svg"
          alt="React Simple Notify"
        />
        RSN
      </a>
    </div>
  )
}
