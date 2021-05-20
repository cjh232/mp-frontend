import React from 'react';
import styled from 'styled-components';
import { Flex, Link } from '@chakra-ui/react';
import NavBarContainer from './components/NavBarContainer';
import Logo from './components/Logo';
import MenuLinks from './components/MenuLinks';
import SearchBar from './components/SearchBar';

const NavBarStyles = styled.div`

    .nav {
        border-bottom: 1px solid #dddddd;
        position: fixed;
        top: 0;
    }

`


export default function Navbar () {


    return (
        <NavBarStyles>
            <Flex 
                zIndex="fixed"
                wrap="wrap"
                bg="#fafbfb" 
                as="nav" 
                align="center" 
                justify="center" 
                className="nav" 
                padding={3}
                w="100%" 
                h="72px" 
                >
                <NavBarContainer justify="space-between" w="1440px" align="center">
                    <Logo />
                    <SearchBar />
                    <MenuLinks />
                </NavBarContainer>
            </Flex>
        </NavBarStyles>
    )
}