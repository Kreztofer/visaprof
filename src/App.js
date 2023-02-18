import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn, HomePage, SignUp } from './pages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
