import { createBrowserRouter } from 'react-router-dom';
import Login from '~/pages/LoginPage/LoginPage';
import MainPage from '~/pages/MainPage/MainPage';

export const mainRoutes = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: "/preview/main",
    element: <PreviewMain></PreviewMain>,
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;
