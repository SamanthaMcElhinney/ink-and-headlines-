import './App.css';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import {getNews, searchNews} from '../../apiCalls'
import News from '../News/News'
import Search from '../Search/Search';

function App() {
  const [news, setNews] = useState([])
  const [error, setError] = useState('')
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  useEffect(()=> {
    getNews()
    .then(data => setNews(data.articles))
  },[])

  const handleSearch = (searchTerm) => {
    setSearched(true)
    setSearchTerm(searchTerm)
    searchNews(searchTerm)
    .then(data => data.status === 'ok' ? setSearch(data.articles) : setError(data.message))
  }

  const resetSearch = () => {
    setSearch([])
    setSearchTerm('')
    setSearched(false)
  }

  return (
      <div className="App">
        <Header />
        <Search handleSearch={handleSearch}/>
        <News articles={searched? search : news} searched={searched}/>
      </div>
  );
}

export default App;
