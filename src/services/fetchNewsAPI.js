export const fetchNewsAPI = async () => {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=0c15ba5dbff749cdb26f00a8891735de'
  );

  const json = await res.json();
  return json.articles.map((article) => ({
    author: article.author,
    title: article.title,
    description: article.description,
    url: article.url,
    image: article.urlToImage,
  }));
};
