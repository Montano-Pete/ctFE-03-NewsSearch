import React, { Component } from 'react';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
  };

  render() {
    const { loading, articles } = this.state;

    if (loading) return <h1>Loading...</h1>;
    return <ArticleList articles={articles} />;
  }
}
