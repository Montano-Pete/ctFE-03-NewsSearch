import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('renders a list of news articles to the page', async () => {
    render(<NewsContainer />);

    screen.getByText('Loading...');
  });
});
