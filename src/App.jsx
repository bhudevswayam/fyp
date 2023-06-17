import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import HomePage from '../components/HomePage';
import ProfilePage from '../components/ProfilePage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route exact path="/" element={<HomePage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
