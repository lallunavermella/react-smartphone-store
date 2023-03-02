import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../utils/utils-test';
import ProductListPage from './ProductListPage';

describe('Given a ProductList page', () => {
  describe('When is invoked', () => {
    test('Then its render with ....', async () => {
      renderWithProviders(<MemoryRouter><ProductListPage /></MemoryRouter>);

      let text;
      let link;
      await waitFor(() => {
        text = screen.getByText('Product list: 2');
        link = screen.getAllByRole('link');
      });

      expect(text).toBeInTheDocument();
      expect(link.length).toBe(2);
    });
  });
});
