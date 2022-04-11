import React from 'react';
import image1 from './../../images/1.png'
import './Home.css'

const Home = () => {
    return (
        <div className='article'>

            <div className="image_part">
            <img src={image1} alt="" srcset="" />
            </div>

            <div className="write_part">
                <h1 className='influencer im' >Influencer</h1>
                <h1 className='marketing im' >Marketing</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloremque quod corporis, consequuntur possimus totam.</p>
                <button> Read More</button>
            </div>


            
        </div>
    );
};

export default Home;