import classNames from 'classnames';
import React from 'react';

export default function UserStatus({ type, setType }) {
  return (
    <div>
      <h2
        onClick={() => {
          setType('signin');
        }}
        className={classNames({ active: type === 'signin' })}
      >
        Sign In
      </h2>
      <h2
        onClick={() => {
          setType('signup');
        }}
        className={classNames({ active: type === 'signup' })}
      >
        Sign Up
      </h2>
    </div>
  );
}
