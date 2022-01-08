import React from 'react';
import LoginForm from './LoginForm';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/dashboard" element={
                <RequireAuth>
                    <Dashboard/>
                </RequireAuth>
            }/>
        </Routes>
    </div>
  );
}

export default App;
