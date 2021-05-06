import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar className="btn btn-danger">
      <Container className="btn btn-danger" >
        <NavbarBrand className="btn btn-danger" href="/"><strong>Lista do Netflix</strong></NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-light text-dark" to="/add"><strong>Adicionar Filme</strong></Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
