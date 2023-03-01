import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import renderWithProviders from '../../utils/utils-test';

describe.only('Given a Header component', () => {
  describe('When it is created', () => {
    test('It should render a image with a logo', () => {
      renderWithProviders(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const logo = screen.getByRole('img', { name: 'Smartphone store' });

      expect(logo).toBeInTheDocument();
    });
    test('It should render a cart with two items', () => {
      const initialState = { cart: { numProducts: 2 } };
      renderWithProviders(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
        {
          preloadedState: initialState,
        },
      );

      const cartCount = screen.getByText('2');

      expect(cartCount).toBeInTheDocument();
    });
  });
});
