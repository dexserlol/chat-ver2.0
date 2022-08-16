
import React, { useState, useEffect } from 'react';

function Autorization(props) {
    const [username, setName] = useState("")
    const [password, setPass] = useState("")

    function name(e) {
        setName(e.target.value)
    }
    function pass(e) {
        setPass(e.target.value)
    }
    function register(e){
        fetch(`https://react-chat-backend-dexser.herokuapp.com/reg?username=${username}&password=${password}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alert(data);
        });
        setName("")
        setPass("")
    }
    function loginned(e){
        fetch(`https://react-chat-backend-dexser.herokuapp.com/log?username=${username}&password=${password}`)
        .catch(()=>{
            alert("test");
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (!(typeof data ==typeof {})){
                return alert(data)
            }
            props.user(data)
        })
    }
    return (
        <div>
            <div>
                <input value={username} onChange={name}/>
                <input value={password} onChange={pass}/>
                <button onClick={register}>registraion</button>
                <button onClick={loginned}>loggin</button>
            </div>
        </div>
    )
}
export default Autorization;