<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> 7e38e2c6ce0315ab7f20bc64695371261ff2db55
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router'
import axios from "axios"
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
     <App />
   </QueryClientProvider>
    </BrowserRouter>
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> 7e38e2c6ce0315ab7f20bc64695371261ff2db55
  </StrictMode>,
)
