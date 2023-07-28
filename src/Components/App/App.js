import "./App.css";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getNews, searchNews } from "../../apiCalls";
import News from "../News/News";
import Search from "../Search/Search";
import Error from "../Error/Error";
import NewsDetails from "../NewsDetail/NewsDetail"
import { v4 as uuidv4 } from "uuid";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  useEffect(() => {
    getNews().then((data) => {
      const articlesWithIds = data.articles.map((article) => ({
        ...article,
        id: uuidv4(),
      }));
      setNews(articlesWithIds);
    });
    setSearched(false);
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    searchNews(searchTerm)
      .then((data) => {
        if (data.status === "ok") {
          const articlesWithIds = data.articles.map((article) => ({
            ...article,
            id: uuidv4(),
          }));
          setSearch(articlesWithIds);
        } else {
          setError(data.message);
        }
        setSearched(true);
      })
      .catch(() => {
        setError(
          "An error occurred while fetching the news. Please try again later.",
    
        );
      });
  };

  const handleReadMore = (articleId) => {
    setSelectedArticleId(articleId);
  };

  const resetSearch = () => {
    setSearch([]);
    setSearchTerm("");
    setSearched(false);
  };

  return (
    <main className="App">
      <Header />
      <Search handleSearch={handleSearch} resetSearch={resetSearch} />
      {error ? (
        <Error message={error} />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<News articles={news} handleReadMore={handleReadMore} />}
          />
          <Route
            path="/results"
            element={
              <News
                articles={searched === true ? search : news}
                handleReadMore={handleReadMore}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <NewsDetails
                article={
                  searched === true
                    ? search.find((article) => article.id === selectedArticleId)
                    : news.find((article) => article.id === selectedArticleId)
                }
              />
            }
          />
          <Route path="*" element={<Error message={"Sorry you went down the wrong path. Please try a different URL"} />} />
        </Routes>
      )}
    </main>
  );
}

export default App;