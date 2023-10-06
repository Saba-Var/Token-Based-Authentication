import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { router } from '@/router'
import React from 'react'
import './index.css'
import '../i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
