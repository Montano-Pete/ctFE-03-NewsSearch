export const fetchNewsAPI = async () => {
  return fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=0c15ba5dbff749cdb26f00a8891735de`
  )
    .then((res) => res.json())
    .then((json) =>
      json.map((article) => ({
        title: article.title,
        author: article.author,
        description: article.description,
      }))
    );
};
