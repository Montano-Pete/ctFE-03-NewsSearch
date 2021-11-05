import React, { Component } from 'react';
import ArticleList from '../components/Article/ArticleList';
import SearchControls from '../components/controls/SearchControls';
import { fetchNewsAPI } from '../services/fetchNewsAPI';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
    searchInput: '',
  };

  async componentDidMount() {
    const articles = await fetchNewsAPI();
    this.setState({
      articles,
      loading: false,
    });
  }

  handleSearchInputChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const articles = await fetchNewsAPI(this.state.searchInput);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, articles, searchInput } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <SearchControls
          searchInput={searchInput}
          onSearchInputChange={this.handleSearchInputChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articles={articles} />
      </>
    );
  }
}
