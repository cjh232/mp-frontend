import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../../common/Navbar'
import { Box } from '@chakra-ui/react'



const Profile = () => {
    return (
        <Box w="100%" h="100%">
            <Navbar />
            <Container className="page-container">
            </Container>
        </Box>
    )
}

export default Profile;