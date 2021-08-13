import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { resetState } from './actions/userAction'
import { useDispatch } from 'react-redux'


 const NavBar = (props) =>{
  const dispatch = useDispatch()
   const logout = (e)=>{
     e.preventDefault()
     dispatch(resetState())
     props.history.push('/')
   }
   const linkChange = (e) =>{
     e.preventDefault()
     props.history.push(`${e.target.outerText.toLowerCase()}`)
   }
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home">Company Name</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="/dashboard" onClick={linkChange}>Dashboard</Nav.Link>
    <Nav.Link href="/" >Home</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link href="/" onClick={logout}>Logout</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default withRouter(NavBar)