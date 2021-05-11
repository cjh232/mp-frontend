import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import { ReactComponent as ProfileLogo } from './assets/user.svg'

const DropdownStyles = styled.div`
    #basic-nav-dropdown::after{
        display: none; 
    }

    .dropdown-item {
        color: black;
    }

`

const NavbarStyles = styled.div`

    .navbar {
        border-bottom: 1px solid #dee2e6;
        background-color: #f8f9fa;
        color: white;
        min-height: 70px;
    }

    a, .navbar-brand, .navbar-nav .nav-link, .navbar-nav p {

        color: #343a40;

        &:hover {
            color: #region ;
        }
    }

    .profile-logo {
        color: #343a40;
        cursor: pointer;
    }

    input {
        border-radius: 2px;
    }

`


const CustomNavbar = () => {

    const history = useHistory();
    const jwt_token = localStorage.getItem('jwt_token');

    const renderOptions = () => {
        if(jwt_token) {
            return <AuthenticatedOptions history={history}/>
        } else {
            return <NonAuthenticatedOptions history={history}/>
        }
    }
    
    return (
        <NavbarStyles>
            <Navbar fixed="top" expand="lg" className="custom-nav">
                <Container>
                    <Navbar.Brand href="#home">Work it Girl!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto white-text">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#link">Catalog</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">News</Nav.Link>
                        
                        </Nav>
                        <Nav>
                            <SearchBar history={history} />
                            <Nav.Link disabled > | </Nav.Link>
                            <DropdownStyles>
                                {renderOptions()}
                            </DropdownStyles>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NavbarStyles>
    )
}

const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    const peformSearchOperation = () => {
        // Convert search params to a URL safe version
        const encodedParams = encodeURIComponent(searchQuery)

        props.history.push(`/catalog/search/?q=${encodedParams}`)
    }

    return (
        <Form inline onSubmit={(event) => {
            event.preventDefault();
            peformSearchOperation();
        }}>
            <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
                onChange={(event) => setSearchQuery(event.target.value)}
                />
        </Form>
    )

}

const AuthenticatedOptions = (props) => {

    const logout = () => {
        localStorage.removeItem('jwt_token');
        props.history.push('/login');
    }



    return (
        <Nav.Link>
            <ProfileLogo className="profile-logo" onClick={() => logout()}/>
        </Nav.Link>
    )
}

const NonAuthenticatedOptions = () => {
    return (
        <Nav>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
        </Nav>
    )
}

export default CustomNavbar;