import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import ForgetPasswd from '../components/ForgetPasswordForm';
import HomePage from '../components/HomePage';
import ProfilePage from '../components/ProfilePage';
import Layout from '../components/Layout';
import Oauth from '../components/Oauth';
import SignupForm from '../components/SignupForm';
const App = () => {
  return (
    
    <Routes>
      
      <Route path='/' element={<Layout/>}>
        <Route path='login' element={<LoginForm/>}/>
        <Route path='forgetpasswd' element={<ForgetPasswd/>}/>
        <Route path='signup' element={<SignupForm/>}/>
      </Route>
      <Route path='/auth'  element={<Oauth/>}>

      </Route>
    
    </Routes>
    
  );
};

export default App;
