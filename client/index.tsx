import React from 'react'
import { render } from 'react-dom';
import MainContainer from './components/MainContainer';
import './styles/index.css'
const App = () => {
    return (
<MainContainer/>
      );
}
// const container:HTMLElement = document.getElementById('root');

// const root: Root = createRoot(container)
// root.render(<App />)
render(<App />, document.querySelector('#root'));