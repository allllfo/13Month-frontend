import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '~/pages/LoginPage/LoginPage';
import MainPage from '~/pages/MainPage/MainPage';
import PreviewMain from '../pages/preview/PreviewMain';

export const mainRoutes = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/preview/main',
    element: <PreviewMain></PreviewMain>,
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;
