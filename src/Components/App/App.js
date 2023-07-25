import "./App.css";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getNews, searchNews } from "../../apiCalls";
import News from "../News/News";
import Search from "../Search/Search";
import Error from "../Error/Error";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    getNews().then((data) => setNews(data.articles));
    setSearched(false)
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    searchNews(searchTerm).then((data) => {
      data.status === "ok" ? setSearch(data.articles) : setError(data.message);
      console.log("Search Results:", search);
      setSearched(true);
    });
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
      <Routes>
        <Route path="/" element={<News articles={news} />} />
        <Route
          path="/results"
          element={
            <News articles={searched === true ? search : news} searched={search} />
          }
        />
        <Route path="*" element={
          <Error message={"url"}/>
        }></Route>
      </Routes>
    </main>
  );
}

export default App;
