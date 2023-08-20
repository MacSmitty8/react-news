import React from 'react';
import './articleDisplay.css'

//Setting up how the paramters and properties will show on the webpage. May update depending on how it looks.
//Side note, in the API, some articles didn't have an author listed within the object, so it may render blank on the page.
const NewsDisplay = ({ author, description, title, url, urlToImage, source }) => {
    return (
        <div className="news-app">
            <div className="news-item">
            <h3><a href={url}>{title}</a></h3>
                <img className="article-image" src={urlToImage} alt="Article Thumbnail" />
                <h4>By {author}</h4> 
                <h4> From {source.name}</h4> 
                <p>{description}</p>
            </div>
        </div>
    );
}

export default NewsDisplay;