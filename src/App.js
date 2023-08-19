import './App.css';
import { useState, useEffect } from 'react';
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
      setArticles(data.articles);
    }
    catch (error) {
      console.error('Error fetching articles:', error);
      // Checks to see if there's any errors when fetching the articles.
  }
};
  return (
    <div className="App">
      <h1>News App!</h1>

    </div>
  );
}

export default App;
