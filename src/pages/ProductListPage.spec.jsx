import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import renderWithProviders from '../utils/utils-test';
import ProductListPage from './ProductListPage';

describe('Given a ProductList page', () => {
  describe('When is invoked', () => {
    test.only('Then its render with ....', async () => {
      renderWithProviders(<ProductListPage />);

      let text;
      await waitFor(() => {
        text = screen.getByText('2');
      });

      expect(text).toBeInTheDocument();
    });
  });
});
