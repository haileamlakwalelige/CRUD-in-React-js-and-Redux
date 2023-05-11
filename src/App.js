import UserList from "./features/users/UserList";
// import React,{useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import AddUser from './features/users/AddUser';
import Update from './features/users/Update';


export default function App() {
  return (
   <div className=" pl-24 pt-16 pr-6">
   <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="/add" element={<AddUser />} />
    <Route path="/edit/:id" element={<Update />} />
   </Routes>
   </div>
  )
}