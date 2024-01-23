import s from './AboutMe.module.scss'
import { TypeAnimation } from 'react-type-animation'
import { Contacts } from '@/blocks/Contacts'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useState } from 'react'
export const AboutMe = () => {
  const [isHideBlock, setIsHideBlock] = useState(false)
  const onSavePdf = () => {
    setIsHideBlock(true)

    setTimeout(() => {
      const input = document.body

      // Задайте здесь фиксированную ширину
      const pdfWidth = 210 // например, ширина формата A4 в мм

      html2canvas(input, {
        width: input.scrollWidth, // Устанавливаем ширину холста равной ширине контента
        windowWidth: input.scrollWidth, // Задаём ширину окна для масштабирования контента
      })
        .then((canvas) => {
          // Получаем данные изображения
          const imgData = canvas.toDataURL('image/png')

          // Создаём новый документ PDF с заданными размерами
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: [pdfWidth, (canvas.height * pdfWidth) / canvas.width], // Рассчитываем высоту для сохранения масштаба
          })

          // Добавляем изображение на страницу PDF
          pdf.addImage(
            imgData,
            'PNG',
            0,
            0,
            pdfWidth,
            pdf.internal.pageSize.getHeight(),
          )

          // Сохраняем PDF
          pdf.save('Резюме - Ломанов Кирилл.pdf')
        })
        .catch((error) => {
          console.error('Ошибка при создании PDF:', error)
        })
        .finally(() => {
          setIsHideBlock(false)
        })
    }, 50)
  }

  return (
    <section className={s.root}>
      <h1 className={s.title}>
        Привет, меня зовут Кирилл. <br /> Я занимаюсь FRONT END разработкой
        <br />
        <span>более 9 лет.</span>
      </h1>

      {!isHideBlock && (
        <>
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
        </>
      )}

      {!isHideBlock && (
        <div className={s.pdfButton} onClick={onSavePdf}>
          PDF
        </div>
      )}
    </section>
  )
}
