import React,{useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import {Routes} from './routes/routes'
import LoginPage from './components/Login/LoginPage';



function App() {
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const [success, setSuccess] = useState(false)

    const logIn = () => {
      setSuccess(true)
    }

    const logOut = () => {
      console.log('details')
    }

  return (
    <>
        <Switch>
          {(!success?
            <Route exact path="/" >
              <LoginPage logIn={logIn} />
            </Route>
            :  <Routes/> 
          )}
        </Switch>
    </>
    
  );
}

export default App;
