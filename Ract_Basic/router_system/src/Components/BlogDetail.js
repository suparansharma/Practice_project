import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogsData } from '../data';
const BlogDetail = () => {
    const {title} = useParams();
    const location = useLocation();
    // console.log(location);
    // const [bodyData,setBodyData] = useState("");
    // useEffect(() =>{
    //     const blogData = blogsData.filter((blog)=> blog.title === title);
    //     setBodyData(blogData[0].body);
    // },[])
    return (
        <div>
          <h1>{title}</h1>
          <p>{location.state.body}</p>  
        </div>
    );
};

export default BlogDetail;