import React from 'react';
//end point /api/user=> name, username, email, password
const SignUp = ({ handleLogged }) => {
  const handleCreate = async (e) => {
    e.preventDefault();
    const userObj = {
      name: e.target.name.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };
    console.log(userObj);
    let data = await fetch(`http://localhost:3000/api/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data, ' if successful change state to isLogged=true');
        if (data) {
          handleLogged();
        }
      });
  };

  const getAuthed = () => {
    fetch('http://localhost:3000/api/oauth')
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'this is getting authenticated ');
      });
  };
  return (
    <button>
      <label htmlFor="my-modal" className="btn">
        Sign Up
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <p className="py-4">Create Account</p>
          <div className="modal-action">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <form
                  className="SignUpForm"
                  onSubmit={handleCreate}
                  data-cy="register-form"
                >
                  <label className="label ml-7 mt-3" htmlFor="name">
                    name:
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs ml-7"
                    name="name"
                    type="text"
                    placeholder="name"
                    data-cy="register-username-input"
                  ></input>
                  <label className="label ml-7 mt-3" htmlFor="email">
                    email:
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs ml-7"
                    name="email"
                    type="text"
                    placeholder="email"
                    data-cy="register-username-input"
                  ></input>
                  <label className="label ml-7 mt-3" htmlFor="username">
                    username:
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs ml-7"
                    name="username"
                    type="text"
                    placeholder="username"
                    data-cy="register-username-input"
                  ></input>
                  <label className="label ml-7" htmlFor="password">
                    password:
                  </label>
                  <input
                    className="input input-bordered w-5/6 max-w-xs ml-7"
                    name="password"
                    type="password"
                    placeholder="password"
                  ></input>
                  <div className="form-control mt-6 mx-2">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      data-cy="create-account-btn"
                    >
                      Create Account
                    </button>
                    <br />
                    <button
                      onClick={getAuthed}
                      className="btn btn-accent"
                      style={{ width: '100%' }}
                    >
                      <img
                        style={{ width: '2em', marginRight: '5px' }}
                        src="https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png"
                      />
                      Register with Google
                    </button>
                  </div>
                </form>
                <div className="divider"></div>
              </label>
              <label htmlFor="my-modal" className="btn w-1/6">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SignUp;
