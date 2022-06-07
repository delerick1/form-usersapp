import React from 'react';
const Userslist = ({users, selectUser}) => {
    return (
        <div>
        <h2>All Users</h2>
            <ul> 
                { users.map((user )=> (
                
                       
                        <li key={user.id}>
                            <h3>{user.first_name} {user.last_name}</h3>
                            <p>
                                email: {user.email}
                        
                            </p>
                            <p>
                                Birth Day {user.birthday}
                            </p>
                            <p>
                                Password: {user.password}
                            </p>
                            <button
                            onClick={() => selectUser(user)}>Edit</button>
                           

                        </li>
                    ))}
            </ul>
            
        </div>
    );
};

export default Userslist;