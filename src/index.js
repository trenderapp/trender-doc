import React from 'react';
import ReactDOM from 'react-dom/client';import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from './Pages/error-page';
import Root from './Pages/root';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
]);

root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);