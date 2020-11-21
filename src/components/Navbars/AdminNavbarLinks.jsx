import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {

    return (
      <div>
        <Nav>
        </Nav>
        <Nav pullRight>
        <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md"></p>
          </NavItem>
          <NavItem eventKey={1} href="#">
            Buscar
          </NavItem>
          <NavItem eventKey={3} href="#">
            Ir para o dashboard da ONG
          </NavItem>
          <NavItem eventKey={3} href="#">
            Sair
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
