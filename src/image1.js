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

function Image1() {
  return (
    <>     
      <div style={{background:'#1A202C'}}> 
      
     
        <div className='container container2'>
       <Link to='/' className='linkable'><AiOutlineRollback style={{color:'white'}}></AiOutlineRollback></Link>
          
        
      
            
            <h1 style={{color:'white'}}>About this website</h1>
            <hr style={{color:'white'}}></hr>
            <div class="css-1vqsgbx">
            
              <div style={{overflow:'hidden'}}>
                <a class="chakra-link css-auue23" >
                    <img alt="blog image here" class="chakra-image css-huc592" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"></img>
                </a>
                </div>
                <p class="chakra-text css-119hn4q" style={{color:'white'}}>This website looks so amazing!

                    Let's try to write some lorem ipsum

                    Ut feugiat odio vel interdum gravida. Aliquam eget erat eget tellus consectetur tincidunt in non nibh. Cras finibus risus non libero fermentum, eget ullamcorper turpis auctor. Vivamus malesuada euismod finibus. Ut non egestas enim. Sed malesuada felis lobortis ligula pharetra, a tempor mauris condimentum. Sed eu leo vitae lorem egestas posuere. Cras ut ligula erat. Nullam in pretium massa. Maecenas eget quam a sapien egestas tristique. Cras eu felis nisi. Duis sed fermentum neque. Fusce dictum nisl non leo accumsan pretium. Aenean et metus rhoncus, feugiat elit ut, dictum dolor. Curabitur malesuada massa et efficitur dapibus. Proin elementum ipsum eget lorem posuere, et efficitur nunc pharetra.

                    Aenean faucibus leo ac facilisis tincidunt. Integer risus augue, iaculis id leo eu, congue sollicitudin nisi. Morbi et ante mi. Maecenas rhoncus tellus vel purus lobortis pretium. Fusce rhoncus, ligula sit amet finibus porta, purus enim ornare quam, vitae vehicula massa eros in odio. Nam mollis placerat felis, sed fringilla massa aliquet et. Donec massa urna, volutpat sed ornare at, ultricies sed nisi. Sed in justo posuere, finibus justo vitae, lacinia mi. Sed vulputate, nisi a molestie mollis, ante turpis accumsan lorem, a malesuada ex velit sed nulla. Nullam nec congue quam.

                    Fusce nec orci nunc. Ut blandit cursus massa a dictum. Nulla pellentesque, nisl in maximus elementum, quam nisi ornare elit, eu interdum risus justo ac quam. Cras sit amet odio dolor. Proin a libero eu lectus viverra maximus sed at neque. Aliquam dignissim libero in urna imperdiet tincidunt. Maecenas nec dui eget urna mollis venenatis facilisis et neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eu viverra nunc. Nunc nec dictum libero, efficitur sagittis enim. Sed vestibulum feugiat dui ac fringilla. Phasellus feugiat quam sed fringilla congue. Proin ante felis, dignissim eu consequat a, aliquet eu est.

                    Integer cursus nisi eleifend pharetra pulvinar. Etiam vitae euismod diam, ut convallis risus. Maecenas elementum dui vel purus iaculis, sit amet consequat neque dapibus. Vestibulum et lobortis eros, quis accumsan felis. Praesent sit amet tempor est. Cras efficitur erat quis neque pretium, ac iaculis nulla commodo. Proin quis augue pharetra, placerat turpis a, semper elit. Donec molestie erat accumsan suscipit sollicitudin.

                    Signing of John Doe!</p>
            </div>
        </div>
        </div>
        </>
    
 
    

    






    
    
  );
}

export default Image1;