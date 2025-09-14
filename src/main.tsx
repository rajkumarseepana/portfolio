import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

const toastDefaultOptionsStyle = {
  borderRadius: "5px",
  fontSize: "14px",
  width: "auto",
  maxWidth: "78vw",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
     <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: { ...toastDefaultOptionsStyle },
        }}
      />
  </StrictMode>,
)
