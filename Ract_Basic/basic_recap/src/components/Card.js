import React from 'react';

const Card = (props) => {
    // console.log(props);
    const {titleText,descText}= props;
    const date = new Date();
    const dateName = date.getDate();
    const monthName = date.getMonth();
    const yearName = date.getFullYear();
    return (
        <div className="card">
        <h3 className='cardTitle'>{titleText}</h3>
        <p className='cardDesc'>{descText}</p>
        <p>{dateName + "/" + monthName +  "/" +yearName}</p>
        </div>
    );
};

export default Card;