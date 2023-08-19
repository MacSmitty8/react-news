import React from 'react';

//Setting up how the paramters and properties will show on the webpage. May update depending on how it looks.
const NewsDisplay = ({ author, description, title, url, urlToImage, source }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className="article-image">
                <img src={urlToImage} alt="Article Thumbnail" />
                <h3><a href={url}>{title}</a></h3>
                <h4>{author}</h4>
                <h4>{source.name}</h4> 
                <p>{description}</p>
            </div>
        </div>
    );
}

export default NewsDisplay;