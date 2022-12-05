import React from 'react'
import { render } from 'react-dom';
import { createRoot, Root } from 'react-dom/client';
const App = () => {
    return (
        <div>hello i am working</div>
    )
}
// const container:HTMLElement = document.getElementById('root');

// const root: Root = createRoot(container)
// root.render(<App />)
render(<App />, document.querySelector('#root'));