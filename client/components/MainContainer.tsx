import React, { useState, useEffect } from 'react';
import '../styles/index.css';
import NavBar from './NavBar';
import MainDisplay from './MainDisplay';
import RootPage from './RootPage';
const MainContainer = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [displayMode, setDisplayMode] = useState('');
  // const [addApp, setAddApp] = useState('')
  const [company, setCompany] = useState('');
  // const [status, setStatus] = useState('')
  // const [resume, setResume] = useState('')

  const [app, setApp] = useState({ company });
  console.log(app, ' line 13');
  // useEffect(() => {
  //   return
  // }, [app])
  // iterate through the data. 1x card display per entry
  // function for that card
  // opens the card and shows you the info
  const handleLogged = () => {
    console.log(isLogged);
    setIsLogged(true);
  };

  const addAppFunc = () => {
    //setAddApp(sadfsadf)
    console.log('this adds another line');
  };

  const removeApp = () => {
    console.log('this removes');
  };

  const loginBtn = () => {
    console.log('logging');
    //fetch req here
  };
  // if the user is logged in (true) it will display MainContainer
  // if the user is not logged in (false) then it will display NewApplication(sign in or sign up)
  // displayModes would be  'rootPage' (sign up or sign in) ** 'mainDisplay' (Main Display) ** 'resume' (view their resumes)
  // fetch request when you log in to get all the user data
  // turn NewApplication component into one and pass it in here on Main Container if the user is Logged off(false)
  // pass in Main Container to index.tsx . have that with only one Component like <App />
  // prop drill from Main Container. Main Container will contain all the displays and the navbar
  if (!isLogged) {
    return (
      <div>
        <RootPage handleLogged={handleLogged} />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar addAppFunc={addAppFunc} setApp={setApp} />
        <MainDisplay />
      </div>
    );
  }
};

export default MainContainer;
