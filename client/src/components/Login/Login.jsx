import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../utils/actions';
import axios from 'axios';
import './Login.css';


export default function Login() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = (e) => {
    e.preventDefault();

    axios.post("/api/users", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
    .catch((err) => {
      console.log(err);
    });
  }

    return (
        
  
<div class= "login">
  <div class="row title">

  <form class="col s12" onSubmit={signUpHandler}>
    <div class="row names">
      <div class="input-field col s3 push-s3">
        <input id="first_name" type="text" class="validate" name="firstName" value={firstName} onChange={(e) => {
          setFirstName(e.target.value);
        }}></input>
        <label for="first_name">First Name</label>
        
      </div>
      <div className="row names">
      <div class="input-field col s3 push-s3">
        <input id="last_name" type="text" class="validate" name="lastName" value={lastName} onChange={(e) => {
          setLastName(e.target.value);
        }}></input>
        <label for="last_name">Last Name</label>
      </div>
      </div>
    </div>
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
        <button class="waves-effect waves-light btn" type="submit"><i class="material-icons right"></i>Sign Up</button>
    </div>
    <div class="row email">
      <div class="input-field col s6 push-s3">
        <input id="emailLogin" type="email" class="validate"></input>
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row password">
      <div class="input-field col s6 push-s3">
        <input id="passwordLogin" type="password" class="validate"></input>
        <label for="password">Password</label>
      </div>
    </div>
    <div className="title">
        <button class="waves-effect waves-light btn"><i class="material-icons right"></i>Log In</button>
    </div>
  </form>
</div>

</div>

    );
}