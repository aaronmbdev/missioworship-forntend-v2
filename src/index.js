import React from 'react';
import 'alertifyjs/build/css/alertify.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './pages/dashboard';
import Login from "./pages/login"
import Logout from './pages/logout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  }
]);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="814123100848-ik8e9eqiqspe1omihljdi0hmpb9ab80l.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
