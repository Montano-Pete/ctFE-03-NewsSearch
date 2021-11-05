import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('renders a list of news articles to the page', async () => {
    render(<NewsContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();

    const input = await screen.findByLabelText('Search Input');
    userEvent.type(input, 'Tesla');

    const submitButton = await screen.findByRole('button', {
      name: 'submitButton',
    });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getAllByText('Tesla', { exact: false });

      expect(articles).toMatchSnapshot();
    });
  });
});
