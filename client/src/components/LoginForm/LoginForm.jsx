import React, { useState } from 'react';
import axios from 'axios';
import '../Login/Login.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();

    axios.post('/api/users/login', {
            email: email,
            password: password
        }
    );
  }

  return (
        
  
    <div>
      <div class="row title">

      <form class="col s12" onSubmit={loginHandler}>
        <div class="row email">
          <div class="input-field col s6 push-s3">
            <input id="emailSignUp" type="email" class="validate" name="email" value={email} onChange={(e) => {
              setEmail(e.target.value);
            }}></input>
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row password">
          <div class="input-field col s6 push-s3">
            <input id="passwordSignUp" type="password" class="validate" name="password" value={password} onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
            <label for="password">Password</label>
          </div>
        </div>
        <div className="title">
            <button type="submit" class="waves-effect waves-light btn"><i class="material-icons right"></i>Log In</button>
        </div>
      </form>
    </div>  

  </div>

    );
}