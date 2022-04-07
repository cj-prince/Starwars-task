import React,{useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import {Routes} from './routes/routes'
import LoginPage from './components/Login/LoginPage';



function App() {
   
    const logOut = () => {
      console.log('details')
    }

  return (
    <>
        <Switch>
         
            <Route exact path="/" >
              <LoginPage />
            </Route>
            :  <Routes/> 
          
        </Switch>
    </>
    
  );
}

export default App;
