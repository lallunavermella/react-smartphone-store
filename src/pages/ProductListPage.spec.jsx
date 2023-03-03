import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../utils/utils-test';
import ProductListPage from './ProductListPage';

describe('Given a ProductList page', () => {
  describe('When is invoked', () => {
    test('Then its render with Product list and a link role', async () => {
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
    test('Then when its loading render the word "Loading"', async () => {
      renderWithProviders(<MemoryRouter><ProductListPage /></MemoryRouter>);

      let loading;

      await waitFor(() => {
        loading = screen.getByText('Loading');
      });

      expect(loading).toBeInTheDocument();
    });
  });
});
