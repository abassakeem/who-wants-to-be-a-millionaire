import { Button, ButtonToolbar, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import './header.css'
import { Link } from "react-router-dom";



//links for the navbar and thier display names
const navLinks = [
    {
        display: 'Home',
        url: '/home'
        
    },
    {
        display: 'Jamb',
        url: '/jamb'
        
    },
    {
        display: 'Practice Test',
        url: "/practice_test"
        
    },
    {
        display: 'About',
        url: '/about'
        
    },
    {
        display: 'Fora',
        url: '/fora'
        
    }
]

const Header = () => {
    return ( 

        <>
            
          
            <header className="header"> 
          



                {[ 'lg' ].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-container mb-3">


          <Container >
          <Navbar.Brand href="#home">Study<span className="Junction">Junction</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" className="offcanvas-container     navbar-container"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=" justify-content-end">
              <Nav className="justify-content-between align-items-center text-center p-1 nav-list" activeKey="/home">
                        {
                            navLinks.map((item,index)=>(
                                <Nav.Item>
                                    <Nav.Link> <li className="nav-item" key={index} ><Link to={item.url}>{item.display}</Link></li></Nav.Link>
                                </Nav.Item>
                                
                            )) 
                        }
                        
                         
                            
                        
                        
                        <div className="login g-5 ">
                        <Nav.Item>
                            <ButtonToolbar>
                        <Link variant="outline-success" bsSize="small" className="btn btn-outline-success login-button" to="/login">Log in</Link>
                        </ButtonToolbar>
                        </Nav.Item>
                        </div>
                    </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 search-box mt-2"
                    aria-label="Search"
                  />
                  <Button className="search-button" variant="outline-success">Search</Button>
                </Form>

                {/* <div className="header-footer">
                    <div className="header-footer-header">
                        <h6>More from Study Junction</h6>
                    </div>
                    <div className="help">help</div>
                    <inite-friends>
                        invite friends
                    </inite-friends>
                </div> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
                </header>
            
        </>
     );
}
 
export default Header;