import React from 'react';
import './Login.css';


export default function Login() {
    return (
        
  
<div class= "login">
  <div class="row title">

  <form class="col s12">
    <div class="row names">
      <div class="input-field col s3 push-s3">
        <input id="first_name" type="text" class="validate"></input>
        <label for="first_name">First Name</label>
        
      </div>
      <div className="row names">
      <div class="input-field col s3 push-s3">
        <input id="last_name" type="text" class="validate"></input>
        <label for="last_name">Last Name</label>
      </div>
      </div>
    </div>
    <div class="row password">
      <div class="input-field col s6 push-s3">
        <input id="password" type="password" class="validate"></input>
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row email">
      <div class="input-field col s6 push-s3">
        <input id="email" type="email" class="validate"></input>
        <label for="email">Email</label>
      </div>
    </div>
    <div className="title">
        <button class="waves-effect waves-light btn"><i class="material-icons right"></i>Sign Up</button>
    </div>
    <div class="row email">
      <div class="input-field col s6 push-s3">
        <input id="email" type="email" class="validate"></input>
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row password">
      <div class="input-field col s6 push-s3">
        <input id="password" type="password" class="validate"></input>
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