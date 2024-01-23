import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/App.tsx'

import 'the-new-css-reset/css/reset.css'
import '@/shared/styles/common.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
