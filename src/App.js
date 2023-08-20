import './App.css';
import { useState, useEffect } from 'react';
import NewsDisplay from './components/NewsDisplay';
function App() {

  const APIKEY = "7c04e93a14234338b38e2f15cbaa5839";
  //useState will hold the Article Data from the API.
  const [articles, setArticles] =  useState([])
  //useEffect hook to 
  useEffect(() => {
    getArticles();
  }, []);

  //Function to get the articles and news from the API.
  //fetching data from the NewsAPI
  const getArticles = async () => {
    try{
      const response = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`);
      if(!response.ok) {
        throw new Error('Network response error.')
      }
      const data = await response.json();
      console.log(data);
      setArticles(data.articles);
    }
    catch (error) {
      console.error('Error fetching articles:', error);
      // Checks to see if there's any errors when fetching the articles.
  }
};
  return (
    <div className="App">
    <nav className="navbar">
        <ul>
                <a href="#US">US</a>
                <a href="#World">World</a>
                <a href="#Politics">Politics</a>
                <a href="#Business">Business</a>
                <a href="#Opinion">Opinion</a>
                <a href="#Health">Health</a>
                <a href="#Entertainment">Entertainment</a>
                <a href="#Style">Style</a>
                <a href="#Travel">Travel</a>
                <a href="#Sports">Sports</a>
                <a href="#Video">Video</a>
        </ul>
    </nav>
      <h1>News App!</h1>
      <div className="articles">
        {articles.map(article => (
          <NewsDisplay
            key={article.key}
            title={article.title}
            description={article.description}
            author={article.author}
            source={article.source}
            url={article.url}
            urlToImage={article.urlToImage}
          />

        ))}
      </div>
    </div>
  );
}

export default App;
