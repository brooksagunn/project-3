import React, { useState } from 'react';
import './Form.css';

import { checkPass, validateEmail } from '../../utils/formHelpers';

export default function Form() {
    const [ email, setEmail ] = useState('');
    const [ user, setUser ] = useState('');
    const [ pass, setPass ] = useState('');

    const [ err, setErr ] = useState('');

    const handleFormSubmission = e => {
        e.preventDefault();

        (!validateEmail(email) || !user) 
        && setErr('Invalid email or username');

        !checkPass(pass) && setErr('More secured password required.');

        setEmail('');
        setUser('');
        setPass('');
    }

    return (
        <div className="form-div">
            <form className="form">
                <h1>Sign-up</h1>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                />
                <label htmlFor="user">Username</label>
                <input 
                    type="text" 
                    name="user"
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    name="pass"
                />
    
                <button 
                    type="button" 
                    onClick={handleFormSubmission}
                >
    
                    Submit
    
                </button>
            </form>

            {err && (
                <div>
                <p className="error-text">{err}</p>
                </div>
            )}
    
        </div>
    );
}

