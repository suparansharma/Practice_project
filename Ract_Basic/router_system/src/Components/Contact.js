import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>This is COntact pages</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos blanditiis est nesciunt corrupti vero dicta quasi aspernatur sint amet voluptas, obcaecati ipsa magni dolorum? Dignissimos explicabo ipsa nihil illo recusandae.</p>
            <button onClick={()=>{navigate("/")}} >Go to home pages</button>
        </div>
    );
};

export default Contact;