import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithProviders from './utils/utils-test';

describe('Given App', () => {
  describe('When route is root', () => {
    test('then it renders the product list', () => {
      renderWithProviders(<MemoryRouter><App /></MemoryRouter>);

      const heading = screen.getByRole('heading', { name: 'Product list' });

      expect(heading).toBeInTheDocument();
    });
  });
  describe('When route is prduct "1"', () => {
    test('then it renders the product detail page', () => {
      renderWithProviders(<MemoryRouter initialEntries={['/product/123']}><App /></MemoryRouter>);

      const heading = screen.getByRole('heading', { name: 'Product Details Page' });

      expect(heading).toBeInTheDocument();
    });
  });
});
