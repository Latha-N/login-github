import {React} from 'react';
import './App.css';
import {  Container } from 'react-bootstrap';

import NavBar from './Navbar'
import Routes from './Routes'



function App() {
  
  return (
      <Container>
        <NavBar />
        <Routes />

      </Container>
  );
}

export default App;
