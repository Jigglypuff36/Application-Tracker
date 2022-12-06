import React from 'react'
import { render } from 'react-dom';
import './styles/index.css'
import { createRoot, Root } from 'react-dom/client';
const App = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">Change colors dang it</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      );
}
// const container:HTMLElement = document.getElementById('root');

// const root: Root = createRoot(container)
// root.render(<App />)
render(<App />, document.querySelector('#root'));