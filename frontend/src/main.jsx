import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>,
)
