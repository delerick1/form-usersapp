import React from 'react';
import axios from 'axios';
import { useState } from "react";

const UsersForm = ({getUsers}) => {


    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

  
      
      const submit = (e) => {
        e.preventDefault();
       const user = {
          first_name: name,
          last_name: lastName,
          email,
          birthday
          
        };

        console.log(user)
        
            axios
            .post("https://users-crud1.herokuapp.com/users/", user)
              .then(() => getUsers())
              .catch((error) => console.log(error.response));
          

    };
    return (
        <form onSubmit={submit} >


        <div>
        <label htmlFor=''>First Name </label>
        <input
       
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
        </div>
        <div>
        <label htmlFor=''>Last Name </label>
        <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
        </div>
        <div>
        <label htmlFor=''>Email </label>
        <input
              type="text"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
        </div>
        <div>
        <label htmlFor=''>Birth Date </label>
        <input
              type="date"
              className="form-control"
              id="birthday"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
            />
        </div>
        <button type="submit" >
          Submit
        </button>
        </form>
    );
};


export default UsersForm