import './navbar.css'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'




const Mavbar = () => {
    const navigate=useNavigate();
    const {user,dispatch}=useContext(AuthContext)
    
    const handleClick=e=>{
        e.preventDefault();
        dispatch({
            type:"LOGOUT",
        });
        navigate("/");
        alert("Logout Success")
        
    }
    
    
    return(
        <div className='navbardiv'>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" fixed='top' >
                <Container>
                    <Navbar.Brand href="/">Wedding Planning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        
                        <Nav.Link href="/services">Services</Nav.Link> 
                        <Nav.Link href="/about">About Us</Nav.Link> 
                        
                    </Nav>
                    {user ? 
                    <div style={{color:"white"}}>
                        
                        <div class="dropdown">
                        <span class="dropbtn" >Welcome,{user.username}</span>
                        
                        <div class="dropdown-content">
                            <li>
                                <ul>{user.username}</ul>
                                <ul>{user.email}</ul>
                                <ul className='logoutbtn' onClick={handleClick}>Logout</ul>
                            </li>
                        </div>
                        </div>
                                                
                        
                        </div>
                     : (
                    <Nav>
                        <Nav.Link href="register">Register</Nav.Link> 
                        <Nav.Link href="login">Login</Nav.Link>
                        
                    </Nav>
                    )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Mavbar