import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Player from './Pages/Player.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/login',
    element: <Login/>
  },

  {
    path: '/player/:id',
    element: <Player/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer theme='dark'/>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </StrictMode>,
)
