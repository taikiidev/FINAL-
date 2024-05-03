import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './pages/filmes.jsx'
import Sobre from './pages/sobre.jsx'
import Home from './pages/home.jsx'
import Contato from './pages/contato.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
    children: [
      {path:'filmes', element: <Filmes/>},
      {path:'sobre', element: <Sobre/>},
      {index: true, element: <Home/>},
      {path:'contato', element: <Contato/>},
      {path:'*', element: <notFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
