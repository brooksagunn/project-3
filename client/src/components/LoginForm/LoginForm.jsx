import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();

    axios.post('/api/users/login', async (req, res) => {
        try {
          const userData = await User.findOne({ where: { username: req.body.username } });
      
          if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect username, please try again' });
            return;
          }
      
          const validPassword = await userData.checkPassword(req.body.password);
      
          if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect password, please try again' });
            return;
          }
      
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.json({ user: userData, message: 'You are now logged in!' });
          });
      
        } catch (err) {
          res.status(400).json(err);
        }
      });
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
            <button class="waves-effect waves-light btn"><i class="material-icons right"></i>Log In</button>
        </div>
      </form>
    </div>  

  </div>

    );
}