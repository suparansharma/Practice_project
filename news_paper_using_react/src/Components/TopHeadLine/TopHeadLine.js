import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
    const url ="https://newsapi.org/v2/everything?q=tesla&from=2022-03-05&sortBy=publishedAt&apiKey=ec51b7ca59ff442ea4e66da5b5f1a7cd";
    fetch(url)
    .then(res => res.json())
    .then(data =>setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Total news : {articles.length}</h1>
            {
               articles.map(article=><News article={article}></News>) 
            }
        </div>
    );
};

export default TopHeadLine;