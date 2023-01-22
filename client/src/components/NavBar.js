import React, { useContext } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LIBRARY_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap"
import {observer} from "mobx-react-lite"
import { useNavigate } from "react-router-dom";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }


    
    return (

        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={LIBRARY_ROUTE}>Online Library</NavLink>
          {user.isAuth ?
          
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => history(ADMIN_ROUTE)}>Admin Panel</Button>
            <Button variant={'outline-light'} onClick={() => logOut()} className="ms-2">Logout</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
             <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Authorization</Button>
        </Nav>
             }
        </Container>
      </Navbar>

    )
})
 
export default NavBar;