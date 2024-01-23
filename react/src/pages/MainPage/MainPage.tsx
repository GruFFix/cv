import { KolibriJob } from '@/blocks/KolibriJob'
import { VoltJob } from '@/blocks/VoltJob'
import { FrontBandJob } from '@/blocks/FrontBandJob'
import { SortedJob } from '@/blocks/SortedJob'
import { KvartaJob } from '@/blocks/KvartaJob'
import { HumandoneJob } from '@/blocks/HumandoneJob'
import { AboutMe } from '@/blocks/AboutMe'

import s from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <>
      <AboutMe />
      {/*<Years />*/}

      <div className={s.works}>
        <HumandoneJob />
        <KvartaJob />
        <SortedJob />
        <FrontBandJob />
        <VoltJob />
        <KolibriJob />
      </div>
    </>
  )
}
