export const fetchNewsAPI = async (searchInput) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  const json = await res.json();
  return json.articles.map((article) => ({
    title: article.title,
    author: article.author,
    image: article.urlToImage,
    url: article.url,
    description: article.description,
  }));
};
