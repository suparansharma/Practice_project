import React, { useEffect, useState } from 'react';

const TopHeadLine = () => {
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
    const url ="https://newsapi.org/v2/everything?q=tesla&from=2022-03-04&sortBy=publishedAt&apiKey=ec51b7ca59ff442ea4e66da5b5f1a7cd";
    fetch(url)
    .then(res => res.json())
    .then(data =>setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Total news : {articles.length}</h1>
        </div>
    );
};

export default TopHeadLine;