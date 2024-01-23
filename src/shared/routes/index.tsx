import {
  createRoutesFromElements,
  createHashRouter,
  Route,
} from 'react-router-dom'

import { MainPage } from '@/pages/MainPage/MainPage.tsx'
import { AppLayout } from '@/layouts/AppLayout/AppLayout.tsx'

import { PATHS } from '@/shared/routes/paths.ts'

export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path={PATHS.MAIN} element={<MainPage />} />
    </Route>,
  ),
)
