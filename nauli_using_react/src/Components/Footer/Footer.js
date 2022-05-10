import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerArticle'>

        <div className='firstPart'>
        <p className='Prev' >Prev</p>
        <p className='Next'>Next</p>
        
        </div>

        <div className='sceondPart'>
        <p className='FB fti' >FB</p>
        <p className='TW fti'>TW</p>
        <p className='IN fti'>IN</p>
        {/* <FontAwesomeIcon icon={faFaceRelieved} /> */}
        </div>
    
    </div>
    );
};

export default Footer;