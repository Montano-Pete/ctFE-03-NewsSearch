import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map((article) => (
      <li key={`${article.title}-${article.url}`}>
        <Article
          title={article.title}
          author={article.author}
          image={article.image}
          description={article.description}
          url={article.url}
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

export default ArticleList;
