import React, {useState} from "react";

import { AddUser } from "./components/Users/AddUser";
import { UserList } from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (username, age) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList, {id: prevUsersList.length, username: username, age: age}]
    })
  }

  return (
    <div>
      <AddUser addUser={addUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
