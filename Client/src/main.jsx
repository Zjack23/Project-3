
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Styles.css'; // Import the global CSS file


import App from './App.jsx';
import ErrorPage from './pages/Error.jsx';
import HomePage from './pages/Home.jsx';
import WelcomePage from './pages/Welcome.jsx';
import SignupPage from './pages/Signup.jsx';
import LoginPage from './pages/Login.jsx';
import CommentPage from './pages/Comment.jsx';
// import Detail from './pages/Welcome.jsx';
import ApolloWrapper from './apolloClient.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/Welcome',
        element: <WelcomePage />,
      },
      {
        path: '/Comment',
        element: <CommentPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloWrapper>
    <RouterProvider router={router} />
  </ApolloWrapper>
);
