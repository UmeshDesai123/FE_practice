
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  const [inputEmail, setInputEmail] = useState({status: false, value:''});
  const [inputPass, setInputPass] = useState({status: false, value:''});
  const [inputPass2, setInputPass2] = useState({status: false, value:''});

  const checkEmail = (event) =>{
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(event.target.value)){
      setInputEmail({status: true, value: event.target.value});
    }
    else{
      setInputEmail({ status: false, value: event.target.value});
    }
  }
  const checkPass = (event) => {
    if(event.target.value.length > 8){
      setInputPass({status: true, value: event.target.value});
    }
    else{
      setInputPass({status: false, value: event.target.value})
    }
  }

  const machPass = (event) => {
    if(inputPass.value === event.target.value){
      setInputPass2({status: true, value: event.target.value})
    }
    else{
      setInputPass2({status: false, value: event.target.value})
    }
  }
  const submitFn = () => {
    if(inputEmail.status && inputPass.status && inputPass2.status){
      alert('Sumited successfully');
    }
    else{
      alert('Can not submit');
    }
  }
  return (
    <div className="container">
      <div>
        <form>
          <p className="label">Email:</p>
          <input className={inputEmail.status ? 'green': ''} id="name" type="email" onChange={checkEmail} required></input>
          <p className="info">{inputEmail.status ? '': 'Invalid email format!'}</p>

          <p className="label">Password:</p>
          <input className={inputPass.status ? 'green': ''} id="password" type="password" onChange={checkPass} required></input>
          <p className='info'>{inputPass.status ? '': 'Password must be atleat 8 characters'}</p>

          <p className="label">Confirm Password:</p>
          <input className={inputPass2.status ? 'green': ''} id="password2" type="password" onChange={machPass} required></input>
          <p className="info">{inputPass2.status ? '': 'Password did not match'}</p>

          <button type="submit" onClick={submitFn}>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default App
