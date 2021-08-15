import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import {Jumbotron,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,Nav} from 'reactstrap';

function Navigation(){
  const[isNavOpen,setNavOpen] = useState(false);
  function toggleNav(){
      setNavOpen(!isNavOpen);
  }
  return(
    <Navbar  expand="md" color="dark" style={{maxHeight:"120px"}}>
    <div className="container">
      <NavbarToggler onClick={toggleNav}/>
     <NavbarBrand href="/" style={{fontSize:'x-large',fontFamily:'serif',marginleft:"200px"}}> MENTAL HEALTH ANALYZER</NavbarBrand>
     <Collapse isOpen={isNavOpen} navbar>
         <Nav navbar>
          <NavItem>
          <NavLink className="nav-link"  to='/Test' style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}><span className="fa fa-home fa-lg"></span> TAKE A TEST</NavLink>
          </NavItem>
          <NavItem>
             <NavLink className="nav-link" to='/About' style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}><span className="fa fa-info fa-lg"></span>ABOUTUS</NavLink> 
          </NavItem>
          <NavItem>
             <NavLink className="nav-link" to='/Contact' style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}><span className="fa fa-envelope fa-lg"></span>CONTACTUS</NavLink> 
          </NavItem>
          <NavItem>
             <NavLink className="nav-link" to='/Blog' style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}><span className="fa fa-address-card fa-lg"></span>BLOG</NavLink> 
          </NavItem>
          <NavItem>
             <NavLink className="nav-link" to='/Feedback' style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}><span className="fa fa-handshake-o fa-lg"></span>FEEDBACK</NavLink> 
          </NavItem>
         </Nav>
         </Collapse> 
    </div>
  </Navbar>
    /* <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
     <h1 className="navbar-brand" style={{fontSize:'xx-large',fontFamily:'serif'}}>Mental Health Analyzer</h1> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>HOMEPAGE</a>
        <a className="nav-link active" href="/Test" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>TAKE A TEST</a>
        <a className="nav-link active" href="/Contact" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>CONTACT US</a>
        <a className="nav-link active" href="/About" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>ABOUT US</a>
        <a className="nav-link active" href="/Blog" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>BLOG</a>
        <a className="nav-link active" href="/Feedback" style={{fontSize:'x-large',fontFamily:'serif',paddingLeft:'24px',paddingRight:'24px'}}>FEEDBACK</a>
      </div>
    </div>
  </div>
</nav>     
    </div> */
    

         
  )  
}


export default Navigation;