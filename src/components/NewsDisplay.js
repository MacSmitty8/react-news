import React from 'react';
import './articleDisplay.css'

//Setting up how the paramters and properties will show on the webpage. May update depending on how it looks.
const NewsDisplay = ({ author, description, title, url, urlToImage, source }) => {
    return (
        <div className="news-app">
            <div className="article-image">
            <h2><a href={url}>{title}</a></h2>
                <img src={urlToImage} alt="Article Thumbnail" />
                <h4>{author}</h4>
                <h4>{source.name}</h4> 
                <p>{description}</p>
            </div>
        </div>
    );
}

export default NewsDisplay;