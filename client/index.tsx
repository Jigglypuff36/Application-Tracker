import React from 'react'
import { render } from 'react-dom';
import NewApplication from './components/NewApplication'
import Button from './components/Button'
import FormInput from './components/FormInput'

import './styles/index.css'
const App = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there!</h1>
              <p className="py-6">Welcome to Application Tracker!</p>
              <p className="py-6">Please Sign In or Sign Up!</p>

          
              <Button>Login</Button>
              <br />
              <br />
              <Button>SignUp</Button>
              <NewApplication />
            </div>
          </div>
        </div>
      );
}
// const container:HTMLElement = document.getElementById('root');

// const root: Root = createRoot(container)
// root.render(<App />)
render(<App />, document.querySelector('#root'));