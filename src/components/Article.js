import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('should render the correct text', () => {
    const { getByText } = render(<Header />);
    expect(getByText('hello from the Header!')).toBeInTheDocument();
  });
});
