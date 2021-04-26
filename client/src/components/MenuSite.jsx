
import React from "react";
import {
    BrowserRouter as Router, Link, Route, Switch
} from 'react-router-dom'
import { Navbar, Nav, Form } from 'react-bootstrap';
import Apod from "./Apod";
import Login from "./Login";
import About from "./About";
import './Style/menuStyle.css'
import firebase from "firebase/app";
import Register from "./Register";
import logo from "../images/logo.png";

function MenuSite() {

    const handleLogout = () => {
        firebase.auth().signOut();
        localStorage.clear("token");
    }
    return (
        <>
            <Router>
                <div className="flex-row">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="60"
                                height="50"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="#apod"></Navbar.Brand>
                        <Nav className="mr-auto">
                            <div className="container">
                                <div className="row">
                                    <Link to="/about" className="text-danger nav-link">Information about NASA</Link>
                                </div>
                            </div>
                        </Nav>
                        <Form inline>
                            <Link className="btn btn-outline-danger m-2" to="/login" onClick={() => handleLogout()} >Logout</Link>
                            <Link className="btn btn-danger m-2" to="/login">Login</Link>
                            <Link className="btn btn-outline-danger m-2" to="/register">Signup</Link>
                        </Form>
                    </Navbar>
                </div>
                <Switch>
                    <Route path="/apod">
                        <Apod />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                      <Route path="/">
                        <img src={logo} alt="logo of nasa apod"></img>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default MenuSite;

