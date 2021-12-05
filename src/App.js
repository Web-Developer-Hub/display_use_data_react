import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <UserData></UserData>
    </div>
  );
}

function UserData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //This is my json data which i updloaded my github repository.this url is get i open raw data..
    // const URL = `https://raw.githubusercontent.com/Web-Developer-Hub/FackData.JSON/master/data.json`;  
    const URL = `./data/data.json`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
    <div>
      <h1 className="h1"> This is my 100 users information load to an API...</h1>
      <div className="parantDiv">
        {data.map((user) => <DisplaUsers userData={user} key={user._id}></DisplaUsers>)}
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>All rights reversed.Copyright © 2021 Habibor-Rahaman.com</div>
    </div>
  )


  function DisplaUsers(props) {
    console.log(props.userData)
    const { _id, name, phone, address, about, balance, age, favoriteFruit, company, friends, registered, isActive } = props.userData;

    return (
      <div className="childDiv">
        <p>_id: {_id ? _id : 'Empty Data'}</p>
        <p>Name: {name ? name : 'Empty Data'}</p>
        <p>Phone: {phone ? phone : 'Empty Data'}</p>
        <p>Address: {address ? address : 'Empty Data'}</p>
        <p>age: {age ? age : 'Empty Data'}</p>
        <p>Company: {company ? company : 'Empty Data'}</p>
        <p>Balance: {balance ? balance : 'Empty Data'}</p>
        <p>Favorite Fruit: {favoriteFruit ? favoriteFruit : 'Empty Data'}</p>
        <p>Registered: {registered ? registered : 'Empty Data'}</p>
        <p>Active: {isActive ? 'True' : 'False'}</p>
        <p>About: {about.slice(0, 100) ? about.slice(0, 100) : 'Empty Data'}</p>
        <p>friends: {friends.map(d => d.name).join(', ') ? friends.map(d => d.name).join(', ') : 'Empty Data'}</p>
      </div>
    )
  }
}

export default App;
