import { ButtonToolbar, Container,  Nav,  Navbar } from "react-bootstrap";
import './header.css'
import { Link } from "react-router-dom";



//links for the navbar and thier display names


const Header = () => {
    return ( 

        <>
            
          
            <header className="header"> 
          



                {[ 'lg' ].map((expand) => (
        <Navbar key={expand} expand={expand}  className="navbar-container mb-3">


          <Container >
          <Navbar.Brand href="#home" className="navbar-head text-light"><b>WWTBAM</b></Navbar.Brand>
            
              <Nav className="d-flex justify-content-between align-items-center text-center p-1 nav-list" activeKey="/home">
                        
                      
                         <div className="login g-5 ">
                        <Nav.Item>
                            <ButtonToolbar>
                        <Link variant="outline-success" bsSize="small" className="btn btn-outline-success login-button" to="/start">START</Link>
                        </ButtonToolbar>
                        </Nav.Item>
                        </div>
                         
                            
                        
                        
                     
                    </Nav>
                

            
          </Container>
        </Navbar>
      ))}
                </header>
            
        </>
     );
}
 
export default Header;