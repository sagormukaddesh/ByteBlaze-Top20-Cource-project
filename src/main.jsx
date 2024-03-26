
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './router/router';
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster></Toaster>
  </>
)
