import React from 'react';
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser } from '../services/users';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
    } catch (e) {
      setErrorMsg('Something went wrong. Please try again');
    }
  };

  return (
    <div>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
