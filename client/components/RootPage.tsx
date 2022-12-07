import React from 'react';
import LoginRoot from './LoginRoot';
import SignUp from './SignUp';
const RootPage = () => {
  const loginHandler = async (e) => {
    e.preventDefault();
    const userObj = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    console.log(userObj);
    fetch(`http://localhost:8080/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('response to the login attemp on login ', data);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Track your application progress with AppTracker
          </p>
          <form onSubmit={loginHandler} data-cy="login-form">
            <label className="label ml-7 mt-3" htmlFor="username">
              username:
            </label>
            <input
              className="input input-bordered w-5/6 max-w-xs ml-7"
              name="username"
              type="text"
              placeholder="username"
              data-cy="login-username"
            ></input>

            <label className="label ml-7" htmlFor="password">
              password:
            </label>
            <input
              className="input input-bordered w-5/6 max-w-xs ml-7"
              name="password"
              type="password"
              placeholder="password"
              data-cy="login-password"
            ></input>
            <div className="form-control mt-6">
              <button
                className="btn btn-secondary"
                type="submit"
                data-cy="login-button"
              >
                Login
              </button>
            </div>
            <p className="flex justify-center text-xs my-2">OR</p>
          </form>
          <div className="divider divider-horizontal"></div>
          <SignUp onClick={() => console.log('sign up')} />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
