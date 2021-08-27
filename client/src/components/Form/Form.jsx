import React, { useState } from 'react';

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
        <div>
            <form className="form">
                <input 
                    type="email" 
                    name="email"
                    value={email}
                />
    
                <input 
                    type="text" 
                    name="user"
                    value={user} 
                />
    
                <input 
                    type="password" 
                    name="pass"
                    value={pass}
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

