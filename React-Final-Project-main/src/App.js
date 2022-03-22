import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import CupcakesPage from './Cupcakes';
import DonutsPage from './Donuts';
import CookiesPage from './Cookies';

export default function App() {
  return (
    <Router>
    <>
  <Navbar bg="light" variant="light">
    <Container fluid sm>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iHdfHaGqOS6c_EOxV4s6YQHaE8%26pid%3DApi&f=1"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      Sweet Spot Truck Reviews Page
      <div>
        <ButtonGroup>
          <Button variant="outline-primary">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="outline-primary">
            <Link to="/cupcakes">Cupcakes</Link>
          </Button>
          <Button variant="outline-primary">
            <Link to="/donuts">Donuts</Link>
          </Button>
          <Button variant="outline-primary">
            <Link to="/cookies">Cookies</Link>
          </Button>
        </ButtonGroup>
        <Switch>
          <Route path="/cookies">
            <CookiesPage />
          </Route>
          <Route path="/donuts">
            <DonutsPage />
          </Route>
          <Route path="/cupcakes">
            <CupcakesPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Navbar.Brand>
    </Container>
  </Navbar>
 </>
    </Router>
  );
}

function Home() {
  return (
<div>
  <h2 className="h2home">Sweet Spot Truck Reviews Page</h2>
    <p>Welcome to the Sweet Spot Truck reviews website!  This is a website for the Sweet Spot Truck customers that would like to leave a review of their products!</p>
    </div>
  )
}