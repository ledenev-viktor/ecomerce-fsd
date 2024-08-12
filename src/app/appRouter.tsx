import { createBrowserRouter } from 'react-router-dom';
import { baseLayout } from './layouts/baseLayouts';
import { MainPage } from '~/pages/main';

export function appRouter() {
  return createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/category',
          element: <div>Category</div>,
        },
      ],
    },
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
      ],
    },
  ]);
}
