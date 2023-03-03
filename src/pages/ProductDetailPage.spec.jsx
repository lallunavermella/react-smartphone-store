import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import renderWithProviders from '../utils/utils-test';
import ProductDetailPage from './ProductDetailPage';

describe('Given a ProductDetail page', () => {
  describe('When is invoked', () => {
    test('Then its render with an image and the text "Brand"', async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/product/123']}>
          <Routes>
            <Route path="/product/:product" element={<ProductDetailPage />} />
          </Routes>
        </MemoryRouter>,
      );

      let text;
      let img;
      await waitFor(() => {
        text = screen.getByText(/Brand/);
        img = screen.getByRole('img');
      });

      expect(text).toBeInTheDocument();
      expect(img).toBeInTheDocument();
    });
    test('Then when its loading render the word "Loading"', async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/product/123']}>
          <Routes>
            <Route path="/product/:product" element={<ProductDetailPage />} />
          </Routes>
        </MemoryRouter>,
      );

      let loading;

      await waitFor(() => {
        loading = screen.getByText('Loading');
      });

      expect(loading).toBeInTheDocument();
    });
  });
});
