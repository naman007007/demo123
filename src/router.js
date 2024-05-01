import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes } from 'react-router-dom';
import Signup from './signup';

import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Blog from './blog';
// import Navbar1 from './navbar';
import Login from './login';
import Image1 from './image1';
import Image2 from './image2';
import Image3 from './image3';
import Post from './post';


const Routee = () => {
    return(
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Blog></Blog>}></Route>
            <Route path='/image1' element={<Image1></Image1>}></Route>        
            <Route path='/image2' element={<Image2></Image2>}></Route>        
            <Route path='/image3' element={< Image3></ Image3>}></Route>        
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route> 
            <Route path='/post' element={<Post></Post>}></Route>   
        </Routes>
    </Router>
    </>
    );
};
export default Routee;
