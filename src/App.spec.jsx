import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Given App', () => {
  describe('When route is root', () => {
    test('then it renders the product list', () => {
      render(<MemoryRouter><App /></MemoryRouter>);

      const heading = screen.getByRole('heading', { name: 'Product List Page' });

      expect(heading).toBeInTheDocument();
    });
  });
  describe('When route is prduct "1"', () => {
    test('then it renders the product detail page', () => {
      render(<MemoryRouter initialEntries={['/product/1']}><App /></MemoryRouter>);

      const heading = screen.getByRole('heading', { name: 'Product Details Page' });

      expect(heading).toBeInTheDocument();
    });
  });
});
