import React from 'react';
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signupUser } from '../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signupUser(email, password);
    } catch (e) {
      setErrorMsg('Something went wrong. Please try again');
    }
  };

  return (
    <div>
      <h1> Sign Up User </h1>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        errorMsg={errorMsg}
      />
    </div>
  );
}
