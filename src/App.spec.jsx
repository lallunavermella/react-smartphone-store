import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
  describe('When route is product "1"', () => {
    test('then it renders the product detail page', () => {
      renderWithProviders(<MemoryRouter initialEntries={['/product/123']}><App /></MemoryRouter>);

      const heading = screen.getByRole('heading', { name: 'Product Details Page' });

      expect(heading).toBeInTheDocument();
    });
  });
  describe('When route is not valid', () => {
    test('then it renders the Not Found page', () => {
      renderWithProviders(<MemoryRouter initialEntries={['/Not/Found']}><App /></MemoryRouter>);

      const heading = screen.getByRole('heading', { name: '404' });

      expect(heading).toBeInTheDocument();
    });
  });
});
