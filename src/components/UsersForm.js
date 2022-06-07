import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";


const UsersForm =  ({ getUsers, userSelected, deselectUsers }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail]= useState("");
    const [birthday, setBirthday]= useState("");
  const[password,setPassword]= useState("");
   
  useEffect(() => {
      if (userSelected !== null) {
        setName(userSelected.first_name);
        setLastName(userSelected.last_name);
        setEmail(userSelected.email);
        setBirthday(userSelected.birthday);
        setPassword(userSelected.password);
      } else {
        setName("");
        setLastName("");
        setEmail("");
        setBirthday("");
        setPassword("");
      }
    }, [userSelected]);
  
    const submit = (e) => {
      e.preventDefault();
      console.log('Submited')
      const user = {
        first_name: name,
        last_name: lastName,
        email,
        birthday,
        password
      };
      console.log(user)
      if (userSelected !== null) {
        // Si hay algo en movieSelected, hay que editar
        alert("Editando");
        axios
          .put(
            `"https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
            user
          )
          .then(() => {
            getUsers();
            deselectUsers();
          });
      } else {
        axios
          .post("https://users-crud1.herokuapp.com/users/", user)
          .then(() => getUsers())
          .catch((error) => console.log(error.response));
      }
    };
  
    return (
      <form onSubmit={submit} >
        
          <div >
            <label htmlFor="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div >
            <label htmlFor="lastName" class="form-label">
            Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>

       
  
        <div >
          <label htmlFor="email" class="form-label">
          Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
  
        <div >
          <label htmlFor="birthday" class="form-label">
          birthday
          </label>
          <input
            type="date"
            className="form-control"
            id="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
          />
        </div>
        <div >
          <label htmlFor="password" class="form-label">
         Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
       
        <button type="submit" >
          Submit
        </button>
      </form>
    );
};

export default UsersForm;