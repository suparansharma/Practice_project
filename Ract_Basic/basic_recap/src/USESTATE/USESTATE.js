import React, { useState } from 'react';

const USESTATE = () => {
    const [count,setCount] = useState(0)
    const handleIncrease =()=>{
        setCount(count+1);
    }

    const handleDecrease = () =>{
        setCount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease}disabled={count ===5 ? true : false}>increase</button>
            <button onClick={handleDecrease}disabled={count ===-5 ? true : false}>descrease</button>
        </div>
    );
};

export default USESTATE;