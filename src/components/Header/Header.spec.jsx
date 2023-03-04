import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import renderWithProviders from '../../utils/utils-test';
import ProductDetailPage from '../../pages/ProductDetailPage';

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
    test('It should render a cart with a two items after post to cart two times', async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/product/123']}>
          <Header />
          <Routes>
            <Route path="/product/:product" element={<ProductDetailPage />} />
          </Routes>
        </MemoryRouter>,
      );

      let cartCount = screen.getByText('0');
      expect(cartCount).toBeInTheDocument();

      await waitFor(() => {
        const addToCartButton = screen.getByRole('button');
        userEvent.click(addToCartButton);
        cartCount = screen.getByText('1');
        expect(cartCount).toBeInTheDocument();
      });
    });
  });
});
