import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe.only('Given a Header component', () => {
  describe('When it is created', () => {
    test('It should render a image with a logo', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const logo = screen.getByRole('img', { name: 'Smartphone store' });

      expect(logo).toBeInTheDocument();
    });
  });
});
