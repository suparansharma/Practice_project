import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const component4 = () => {
    const {user,text} = useContext(UserContext);
    return (
        <div>
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <h2>{text}</h2>
        </div>
    );
};

export default component4;