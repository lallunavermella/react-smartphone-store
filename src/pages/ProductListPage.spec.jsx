import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    test('Then when it search it will render a filter list', async () => {
      renderWithProviders(<MemoryRouter><ProductListPage /></MemoryRouter>);

      let search;
      let link;

      await waitFor(() => {
        link = screen.getAllByRole('link');
        expect(link.length).toBe(2);

        search = screen.getByRole('textbox');
        userEvent.type(search, 'Iconia Talk z');
        userEvent.keyboard('{enter}');
        link = screen.getAllByRole('link');

        expect(link.length).toBe(1);
      });
    });
  });
});
