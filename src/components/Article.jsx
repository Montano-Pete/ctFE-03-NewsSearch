import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, image, url, description }) => (
  <>
    <figure>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <img source={image} alt={title} />
      <figcaption>{url}</figcaption>
      <p>{description}</p>
    </figure>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.image.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
