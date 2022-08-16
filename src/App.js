//import './App.css';
import React, { useState, useEffect } from 'react';
import Autorization from './Autorization';
import Message from './Message';


function App() {
  const [user, setUser] = useState(null)
  const [mes, setMes] = useState("")

  const [message, messageReplace] = useState([]) 

  useEffect(()=>{
      let timerID = setTimeout(() => {
            fetch(`http://127.0.0.1:3001/getmes`)
            .then((res)=>{
              return res.json()
            })
            .then((data)=>{
              //console.log(message)
              messageReplace(data)
            })
      } ,200)
      return ()=>{clearTimeout(timerID)}
  })
  function messageedit(e){
    setMes(e.target.value)
  }
  function Submit(e){
    fetch(`http://127.0.0.1:3001/mes?username=${user.username}&text=${mes}`)
    setMes("")
    e.preventDefault()
  }
  if (user){
    return (
      <div>
        <h1>{user.username}</h1>
        <form onSubmit={Submit}>
          <input value={mes} onChange={messageedit}/>
          <button type="submit">send</button>
        </form>
        <Message test={message} user={user}/>
      </div>
    )
  }
  return (
    <div>
      <Autorization user={setUser}/>
    </div>
  );
}

export default App;
