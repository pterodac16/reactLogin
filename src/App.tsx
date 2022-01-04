import React from 'react';
import LoginForm from './LoginForm';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
