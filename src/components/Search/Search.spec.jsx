import { screen } from '@testing-library/react';
import React from 'react';
import renderWithProviders from '../../utils/utils-test';
import Search from './Search';

describe('Given a Search component', () => {
  describe('When it is rendered', () => {
    test('it will be render a searchbox with name "Search"', () => {
      renderWithProviders(<Search onSearch={jest.fn} />);

      const input = screen.getByRole('searchbox', { name: 'Search' });

      expect(input).toBeInTheDocument();
    });
    test('it will be render a placeholder text "Search for a product"', () => {
      renderWithProviders(<Search onSearch={jest.fn} />);

      const input = screen.getByPlaceholderText('Search for a product');

      expect(input).toBeInTheDocument();
    });
  });
});
