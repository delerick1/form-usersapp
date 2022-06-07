import './App.css';
import UsersForm from './components/UsersForm';
import Userslist from './components/Userslist';
import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {

  
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

 
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
const selectUser = (users) => setUserSelected(users);
  
const deselectUsers = () => setUserSelected(null);

  return (
    <div >
<UsersForm 
getUsers = {getUsers} 
deselectUsers = {deselectUsers}
userSelected = {userSelected}

/>
<Userslist users={users} selectUser={selectUser}/>
    </div>
  );
}

export default App;
