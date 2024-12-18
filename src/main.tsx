import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
      />
      <App />
    </NextUIProvider>
  </StrictMode>,
)
