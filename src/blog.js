// import logo from './logo.svg';
// import './App.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';

// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Navbar1 from './navbar';
// import axios, {isCancel, AxiosError} from 'axios';
// import React, { Formik, useEffect, useState } from 'react';
// import SignUp from './login';
// import Routee from './router';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';




// function Blog() {
    
  
//     return (
//     <>
    
//         <div style={{backgroundColor:'#1A202C', color:'white'}}>
//         <Navbar1></Navbar1>
        
       
//         <div className='container container1'>
//             <h1 style={{fontFamily:'sans-serif'}}>Latest articles</h1>
//             <hr></hr>
//                 <div className='row'>
//                     <div className='col-4'>
                       
//                        <div className='outer'> <a className='tran'><img className='img' src="https://newbreak.church/wp-content/uploads/2023/02/3kv48ns4wuu.jpg" alt="" /></a></div>
//                        <Link to='image1' style={{textDecoration:'none', color:'white'}}> <a><h2 className='normal'>You Are Not Just Talented, You Are Spiritually Gifted</h2></a></Link>
//                         <p>Now about the gifts of the Spirit, brothers and sisters, I do not want you to be uninformed… 4 There are different kinds of gifts, but the same Spirit...</p>
//                         <div className='inner flex'>
//                         <span class="chakra-avatar css-1o8xes81 css-1"><div role="img" aria-label="unknown" class="chakra-avatar__initials css-1pd2iu">u</div></span>
//                             <p className='m-0' style={{paddingLeft:'10px'}}>9 Days to go</p>
//                             <p className='icn m-0'><AiOutlineHeart></AiOutlineHeart> </p> 
//                             <p className='m-0'>0</p>
//                         </div>
//                     </div>
                    
//                     <div className='col-4'>
//                     <div className='outer'> <a className='tran'><img className='img' src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="" /></a></div>
                   
//                     <Link to='image2' style={{textDecoration:'none', color:'white'}}> <a><h2 className='normal'>About this website</h2></a></Link>
//                         <p>This website looks so amazing! Let's try to write some lorem ipsum Ut feugiat odio vel interdum gravida. Aliquam eget erat eget tellus consectetur t...</p>
//                         <div className='inner flex'>
//                         <span class="chakra-avatar css-1o8xes81 css-2"><div role="img" aria-label="unknown" class="chakra-avatar__initials css-1pd2iu3">p</div></span>
//                             <p className='m-0' style={{paddingLeft:'10px'}}>About 21 hour ago</p>
//                             <p className='icn m-0'><AiOutlineHeart></AiOutlineHeart> </p> 
//                             <p className='m-0'>0</p>
//                         </div>
//                     </div>
//                     <div className='col-4'>
//                     <div className='outer'> <a className='tran'><img className='img' src="https://picsum.photos/200/300/" alt="" /></a></div>
                   
//                     <Link to='image3' style={{textDecoration:'none', color:'white'}}><a><h2 className='normal'>gaurav</h2></a></Link>
//                         <p>React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, compone...</p>
//                         <div className='inner flex'>
//                         <span class="chakra-avatar css-1o8xes81 css-3"><div role="img" aria-label="unknown" class="chakra-avatar__initials css-1pd2iu3">n</div></span>
//                             <p className='m-0' style={{paddingLeft:'10px'}}>5 month ago</p>
//                             <p className='icn m-0'><AiOutlineHeart></AiOutlineHeart> </p> 
//                             <p className='m-0'>1</p>
//                         </div>
//                     </div>
            
            
            

                   
//                     </div>
                   
//              </div>
//         <div className="fotterr">
//             <p>Copyright © 2023 Next Js Blog Template</p>
//             <a href="">Privacy Policy</a>
//             <a href="">Terms and Conditions</a>
//         </div>
//     </div>
// </>
    






    
    
//   );
// }

// export default Blog;
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart } from "react-icons/fa6";
import "./App.css";
import { Link } from "react-router-dom";
// import Navba from "./nav";
import Carousel from "react-bootstrap/Carousel";
import { AiOutlineClose, AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Checkbox from "@mui/material/Checkbox";

import Navbar1 from './navbar';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';






const Blog = () => {
  const [blog, Setblog] = useState([]); 

  const allblog = async () => {
    try {
      const res = await axios.get("http://localhost:3001/blogall");
      Setblog(res.data.data);
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(() => {
    allblog();
  }, []);

  const deleteblog = async (values) => {
    try {
      let token = localStorage.getItem("token");
      const res = await axios.delete(`http://localhost:3001/blogdelete?id=${values._id}`,
        { headers: { token: token } }
      );
      console.log(res);
      allblog();
    } catch (error) {
      console.log(error);
    }

  };
  

 



  return (
    <div className="back">
      <div>
      <Navbar1></Navbar1>
      </div>

      <div style={{ display: "flex" }}></div>
      <section
        style={{
          paddingTop: "150px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="content" style={{ paddingTop: "50px" }}>
          {/* <h2>BlogApi</h2> */}
          <h2>BlogApi</h2>
        </div>
      </section>
      <Carousel slide={false} style={{ paddingTop: "100px" }}>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img
            src="https://www.espncricinfo.com/cricketers/virat-kohli-253802/photos"
            width="100%"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/371700/371735.jpg"
            width="100%"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/371700/371707.jpg"
            width="100%"
            alt=""
          />
        </Carousel.Item>
        
      </Carousel>
      <div className="head">
        <h2 className="h2">Latest articles</h2>
        <hr className="hr" />
        <div className="card-box">
          {
            blog.map((set, index) => {
              return (
              <div className="card1">
                <div className="w-100">
                  <div className="img-box">
                    <a href="" className="img-edit">
                      <img
                        src={`http://localhost:3001/images/${set.image}`}
                        key={set.image}
                        className="img"
                      />
                    </a>

                  </div>
                  <h2>
                    <Link to="/second">
                      <a key={set.title}>{set.title}</a>
                    </Link>
                  </h2>
                  <p className="mar" key={set.description}>{set.description}</p>
                  <div className="mt-3 padd">
                    <div className="d-flex align-items-center">
                      <span className="color-box">
                        <div>u</div>
                      </span>
                      <p
                        style={{ textTransform: "capitalize" }}
                        className="m-0"
                      >
                        <span style={{ paddingLeft: "10px" }}>6 days ago</span>
                      </p>
                      
                      <div style={{ padding: "10px" }}>
                        
                        <FormControlLabel
                          control={
                            <Checkbox
                            
                              icon={<FavoriteBorderIcon className="heart" />}
                              checkedIcon={<FavoriteIcon className="heart" />}
                              />
                            }
                          
                        />
                      </div>
                            <p style={{ margin: "0" }}>{index+1}</p>

                      <span className="heart-1">
                        <AiFillDelete
                          onClick={() => deleteblog(set)}
                        ></AiFillDelete>
                      </span>
                      <span className="heart-2">
                        <AiFillEdit
                        ></AiFillEdit>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })} 
        </div>
      </div>

      <div className="fotterr">
        <p style={{color:'white'}}>Copyright © 2023 Next Js Blog Template</p>
        <a href="">Privacy Policy</a>
        <a href="">Terms and Conditions</a>
      </div>
    </div>
  )
        };

export default Blog;