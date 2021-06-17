import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Navbar from '../../common/Navbar'
import { Box,Center, Flex } from '@chakra-ui/react'


const HomePage = () => {
    return (
        <Box>
            <Navbar />
            <Center className="page-content" w="100%">
                <Flex direction="column" w="1440px" justifyContent="center">
                    <h2>Home Page</h2>
                    
                </Flex>
            </Center>
        </Box>
    )
}

export default HomePage;