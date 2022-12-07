import React from 'react';

const LoginRoot = () => {
  return (
    <button>
      <label htmlFor="my-modal" className="btn">
        Login
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <p className="py-4">Account Login</p>
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
              <input
                type="text"
                placeholder="insert account password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => console.log(e.target.value)}
              />
              <label className="label">
                <span className="label-text-alt"></span>

                <span className="label-text-alt">
                  <button
                    onClick={() => console.log('clicked login')}
                    className="btn"
                  >
                    Login
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

export default LoginRoot;
