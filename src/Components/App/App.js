import './App.css';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import {getNews} from '../../apiCalls'
import News from '../News/News'

function App() {
  const [news, setNews] = useState([])
  const [error, setError] = useState('')
  
  useEffect(()=> {
    getNews()
    .then(data => setNews(data.articles))
  },[])

  return (
      <div className="App">
        <Header />
        <News articles={news}/>
      </div>

  );
}

export default App;
