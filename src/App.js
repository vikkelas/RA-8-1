import './App.css';
import useFetch from "./hook/useFetch";
import List from "./Components/List/List";
import {useState} from "react";
import User from "./Components/User/User";

function App() {
  const [{data, load}] = useFetch(`${process.env.REACT_APP_USERS_URL}users.json`, []);
  const [user, setUser]= useState(null);

  if(load){
    return <div className='load'>Загрузка....</div>
  }

  const handleSetUser = (id)=>{
    setUser(id)
  }

  return(
    <div className='container'>
      <List items={data} changeUser={handleSetUser}/>
      {user&& <User userId={user.id}/>}
    </div>
  );
}

export default App;
