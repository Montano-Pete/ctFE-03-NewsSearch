import React, { Component } from 'react';
import { fetchNewsAPI } from '../services/fetchNewsAPI';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    const articles = await fetchNewsAPI();
    this.setState({
      articles,
      loading: false,
    });
  }
  render() {
    const { loading, articles } = this.state;

    if (loading) return <h1>Loading...</h1>;
    return null;
    // ArticleList articles={articles} />;
  }
}
