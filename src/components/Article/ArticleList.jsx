import React from 'react';
import PropTypes from 'prop-types';
import { Article } from './Article';

export const ArticleList = ({ articles }) => (
  <ul>
    {articles.map((article) => (
      <li>
        <Article
          title={article.title}
          author={article.author}
          image={article.image}
          url={article.url}
          description={article.description}
        />
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
