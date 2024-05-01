import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa6';


function Navbar1() {
  return (
    <>
      <Navbar expand="lg" className=" container" >
      <Container fluid className='light' style={{padding:'10px'}}>
        <Navbar.Brand href="#" style={{color:'white'}}><FaBlog style={{width:'50px', height:'50px'}}></FaBlog><aaa style={{padding:'0px 10px 0px'}}>Blog</aaa></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="#action1" style={{color:'white'}}>Home</Nav.Link>
            {/* <Nav.Link href="#action2" style={{color:'white'}}>Sign in</Nav.Link> */}
            <Link to='login' style={{textDecoration:'none'}}><Nav.Link href="#action2" style={{color:'white'}}>Sign in</Nav.Link></Link>
         
            <Link to='signup' style={{textDecoration:'none'}}><Nav.Link href="#action3" style={{color:'white'}}>
              Create an account
            </Nav.Link></Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Link to='/post'><Button variant="outline-white" style={{color:'white'}}>Create Post</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    

    

    </>
    






    
    
  );
}

export default Navbar1;