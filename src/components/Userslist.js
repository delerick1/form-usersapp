import React from 'react';

const Userslist = ({users}) => {
    return (
        <div>
            <ul>
                {
                    users.map((user )=> (
                        <li key={user.id}>


                            <h3>{user.first_name} {user.last_name}</h3>
                            <p>Email:
                                <b>{user.email}</b>
                             </p>
                             <p>Email:
                                <b>{user.birthday}</b>
                             </p>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default Userslist;