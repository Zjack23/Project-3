import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Comments from './pages/Comments'; // Import the Comments page
import Login from './pages/Login';
import Signup from './pages/Signup';
import Info from './pages/Info'; // Import the Info page
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
    children: [
       {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/comments/:id',
        element: <Comments /> // Add the Comments route
      }, {
        path: '/',
        index: true,
        element: <Info /> // Add the Info route
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
