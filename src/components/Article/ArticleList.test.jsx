import React from 'react';
import { screen, render } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  it('displays a list of articles', () => {
    render(
      <ArticleList
        articles={[
          {
            author: 'Igor Bonifacic',
            title:
              'Tesla launches Supercharger pilot program to charge other EVs',
            description:
              'As promised earlier in the year\r\n, Tesla is expanding access to its Supercharger charger network. Starting today, the company is opening 10 locations in the Netherlands to non-Tesla EVs as part of a pilot program\r\n. Provided you live in the country and you’ve…',
            url: 'https://www.engadget.com/tesla-the-netherlands-supercharger-pilot-223842483.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2021-10/0ab40fa0-3b5e-11ec-a6ff-b714ec121b30',
          },
        ]}
      />
    );

    const ul = screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
  });
});
