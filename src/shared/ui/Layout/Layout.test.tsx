import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

test('should render layout', () => {
  const router = createMemoryRouter([
    {
      element: <Layout />,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/',
          element: <div>home</div>,
        },
      ],
    },
  ]);

  render(<RouterProvider router={router} />);

  expect(screen.getByText('home')).toBeInTheDocument();
});
