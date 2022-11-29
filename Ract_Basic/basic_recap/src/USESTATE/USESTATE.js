import React, { useState } from 'react';

const USESTATE = () => {
    const [count,setCount] = useState(0)
    const handleIncrease =()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>increase</button>
        </div>
    );
};

export default USESTATE;