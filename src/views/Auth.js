import React from 'react';
import { useState } from 'react';
import UserStatus from '../components/UserStatus';
import AuthForm from '../components/AuthForm';
import { signInUser, signupUser } from '../services/users';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [type, setType] = useState('signin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        type === 'signin' ? await signInUser(email, password) : await signupUser(email, password);
      setCurrentUser(resp);
    } catch {
      setErrorMsg('Somthing went wrong. Please try again.');
    }
  };
  return (
    <div>
      <UserStatus type={type} setType={setType} />
      <AuthForm
        errorMsg={errorMsg}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
