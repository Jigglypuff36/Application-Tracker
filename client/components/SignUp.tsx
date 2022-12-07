import React from 'react';
//end point /api/user=> name, username, email, password
const SignUp = () => {
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
                <span className="label-text"></span>
                <span className="label-text-alt"></span>
              </label>
              <input
                type="text"
                placeholder="insert account username"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => console.log(e.target.value)}
              />
              Username
              <input
                type="text"
                placeholder="insert account password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => console.log(e.target.value)}
              />
              Password
              <input
                type="text"
                placeholder="insert account password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => console.log(e.target.value)}
              />
              Confirm Password
              <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt">
                  <button
                    onClick={() => console.log('clicked login')}
                    className="btn"
                  >
                    Submit
                  </button>
                  <div className="divider"></div>
                  <label htmlFor="my-modal" className="btn">
                    Close
                  </label>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SignUp;
