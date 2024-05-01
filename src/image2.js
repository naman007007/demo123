import logo from './logo.svg';
import './image.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar1 from './navbar';
import Routee from './router';
import Blog from './blog';
import Login from './login';
import Signup from './signup';
import { AiOutlineRollback } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Image2() {
  return (
    <>     
      <div style={{background:'#1A202C', width:'100%', height:'800px'}}> 
     
        <div className='container container2'>
       <Link to='/' className='linkable'><AiOutlineRollback style={{color:'white'}}></AiOutlineRollback></Link>

        
      
            
            <h1 style={{color:'white'}}>React js</h1>
            <hr style={{color:'white'}}></hr>
            <div class="css-1vqsgbx">
            <div style={{overflow:'hidden'}}>
                <a class="chakra-link css-auue23">
                    <img alt="blog image here" class="chakra-image css-huc592" src="https://picsum.photos/200/300/"></img>
                </a>
                </div>
                <p class="chakra-text css-119hn4q" style={{color:'white'}}>React js is my fav JavaScript Library.</p>
            </div>
        </div>
        </div>
        </>
    
 
    

    






    
    
  );
}

export default Image2;