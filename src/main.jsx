import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Pages/Error';
import Home from './components/Pages/Home';
import MarkBooks from './components/Pages/MarkBooks';
import Chart from './components/Pages/Chart';
import BookDetails from './components/Pages/BookDetails';
import { Toaster } from 'react-hot-toast';
import LatestBook from './components/Pages/LatestBook';
import LatestDetails from './components/Pages/LatestDetails';
import Contact from './components/Pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/markBooks",
        element: <MarkBooks />
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />
      },
      {
        path: "/latest-books",
        element: <LatestBook />
      },
      {
        path: "/latest-details/:id",
        element: <LatestDetails />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/chart",
        element: <Chart />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
