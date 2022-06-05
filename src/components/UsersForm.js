import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

const UsersForm = () => {


    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

  
      
      const submit = (e) => {
        e.preventDefault();
       const user = {
          nafirst_name: name,
          last_name: lastName,
          email,
          birthday
          
        }

        console.log(user)


    };
    return (
        <form onSubmit={submit} >


        <div>
        <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
        </div>
        <div>
        <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
        </div>
        <div>
        <input
              type="text"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
        </div>
        <div>
        <input
              type="date"
              className="form-control"
              id="birthday"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
            />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        </form>
    );
};


export default UsersForm