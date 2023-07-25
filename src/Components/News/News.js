import "./News.css";
import NewsCard from "../NewsCard/NewsCard";

const News = ({ articles }) => {
  const newsToRender = articles.length ? (
    articles.map((article) => (
      <section key={article.id}>
        <NewsCard
          id={article.id}
          author={article.author}
          title={article.title}
          description={article.description}
          image={article.urlToImage}
          date={article.publishedAt}
        />
      </section>
    ))
  ) : (
    <h1>Something went wrong! Our apologies, please try again later</h1>
  );

  return <div>{newsToRender}</div>;
};

export default News;
