//import { useState } from 'react'//
import React from 'react';

//import './App.css';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'; // Corrected import
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from '../components/home';
import Add from '../components/add';
import Login from '../components/login';
import Search from '../components/search';
import Update from '../components/update';
import Signup from '../components/signup';
//import Partials from 'react-router-dom'
import Leave from '../components/leave';
import Payslip from '../components/payslip'
import Layout from './layout';

function App() {
  
  return (
        <div>
               
               <BrowserRouter>
  <Routes>
    {/* Default route */}
    <Route path="/" element={<Login />} />
    {/* Home route */}
    <Route path="/home" element={<Layout />}>
      <Route path="/home" element={<Homepage />} />
      <Route path="add" element={<Add />} />
      <Route path="search" element={<Search />} />
      <Route path="update" element={<Update />} />
      <Route path="leave" element={<Leave />} />
      <Route path="payslip" element={<Payslip />} />
    </Route>
    {/* Signup route */}
    <Route path="/signup" element={<Signup />} />
    {/* Redirect unmatched routes to login */}
    
  </Routes>
</BrowserRouter>


    </div>
  );
}

export default App;

