import React from 'react';

const Users = () => {
    const users =[
        {
            FullName:"Rahim",
            age:32,
            phone:[
                {home:"012345678"},
                {office:"987456"},
            ],
        },
        {
            FullName:"Karim",
            age:30,
            phones:[
                {home:"9874563210"},
                {office:"123456"},
            ],
        }
    ]
    return (
        <div>
            <h2>Nested Lists</h2>
            {
                users.map((user,index)=>
                <article key={index}>
                    <h3>{user.FullName}</h3>
                    <p>{user.age}</p>
                    {/* {
                   user.phones.map((phone,index)=>
                   <div >
                    <p>Home:{phone.home}</p>
                    <p>Office:{phone.office}</p>
                   </div>
                   )        
                    } */}
                </article>)
            }
            
        </div>
    );
};

export default Users;