import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ValidationHelper from "./../util/ValidationHelper";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const PageNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <nav className="navbar">
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </Navbar.Brand>
            <NavLink className="nav-link" to="/">
              Click & Collect
            </NavLink>
          </nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/">
                Home Page
              </NavLink>
              {ValidationHelper.isLogin() && (
                <NavLink className="nav-link" to="/cartList">
                  Cart List
                </NavLink>
              )}
            </Nav>

            {ValidationHelper.isLogin() ? (
              <button className="btn btn-danger mx-2"> LogOut </button>
            ) : (
              <button className="btn btn-danger mx-2"> LogIn </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default PageNavbar;
