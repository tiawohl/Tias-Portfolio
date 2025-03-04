import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import * as React from 'react'
import App from './App.tsx'
import Portfolio from './pages/portfolio.tsx'
import Contact from './pages/contact.tsx';
import About from './pages/about.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
    // errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
