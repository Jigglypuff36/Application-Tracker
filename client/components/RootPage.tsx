import React from 'react';
import LoginRoot from './LoginRoot';
import SignUp from './SignUp';
const RootPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Track your application progress with AppTracker
          </p>
          <div className="divider divider-horizontal"></div>
          <SignUp onClick={() => console.log('sign up')}/>
        </div>
      </div>
    </div>
  );
};

export default RootPage