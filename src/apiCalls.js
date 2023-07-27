export const getNews = () => {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=1ff3e6e3e43d46209d17845b130919de")
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw new Error('Sorry server error loading articles...')
        }
    })
}

export const searchNews = (search) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=1ff3e6e3e43d46209d17845b130919de`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching search results:", error);
      throw error;
    });
}

