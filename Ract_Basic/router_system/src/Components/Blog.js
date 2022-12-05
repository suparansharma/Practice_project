import React, { useState } from 'react';

import { blogsData } from './../data';
const Blog = () => {
    const [blogs,setBlogs] = useState(blogsData);

    const truncateString = (str,num)=>{
        if(str.length > num){
            return str.slice(0,num) + "..."
        }else{
            return str;
        }
    }
    console.log(blogs);
    return (
        <div>
            <h1>Blog Pages</h1>
            <section>
                {
                    blogs.map((blog)=>{
                        const {id,title,body}= blog;
                        return(
                            <article key={id}>
                                <h3>{title}</h3>
                                <p>{truncateString(body,20)}</p>
                            </article>
                        )
                    })
                }
            </section>
          
        </div>
    );                 
};

export default Blog;