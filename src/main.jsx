import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './routes/Route.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,

)
