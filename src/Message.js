import React from 'react';

function Message(props) {
    function Delete(el) {
        fetch(`https://node-back-chat.herokuapp.com/remove?id=${el.target.id}&username=${props.user.username}`)
        el.preventDefault()
    }
    let Arr=props.test.map((el)=>{
        return <li key={el.id} >{`${el.username}: ${el.text}  `}<a id={el.id} href="#" onClick={Delete}>remove</a></li>
    })
    return (
        <ul>
            {Arr}
        </ul>
    )
}
export default Message