import './App.css';
import UsersForm from './components/UsersForm';
import Userslist from './components/Userslist';
import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

console.log(users)


const getUsers = () => {
  axios
    .get("https://users-crud1.herokuapp.com/users/")
    .then((res) => setUsers(res.data));
};


  return (
    <div >
<UsersForm 
getUsers={getUsers}
/>
<Userslist users={users}/>
    </div>
  );
}

export default App;
