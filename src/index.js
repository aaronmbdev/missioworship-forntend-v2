import React from 'react';
import 'alertifyjs/build/css/alertify.css';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './app';
import Login from "./pages/login"
import Logout from './pages/logout';
import NotFound from './pages/404';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/administracion",
    element: <App section="admin" />
  },
  {
    path: "/asistencia",
    element: <App section="attendance" />
  },
  {
    path: "/canciones",
    element: <App section="songs" />
  },
  {
    path: "/planning",
    element: <App section="planning" />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

serviceWorkerRegistration.register();

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="814123100848-ik8e9eqiqspe1omihljdi0hmpb9ab80l.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

