export const getNews = () => {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=1ff3e6e3e43d46209d17845b130919de")
      .then(res => res.json())
}

export const searchNews = (search) => {
  return fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=1ff3e6e3e43d46209d17845b130919de`)
  .then(res => res.json())
}

