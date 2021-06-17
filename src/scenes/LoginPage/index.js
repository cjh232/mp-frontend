import React from 'react';
import { Box } from "@chakra-ui/react"
import { Center, Container, Heading, Text, HStack, VStack, StackDivider, Divider  } from "@chakra-ui/react";
import LoginForm from './components/LoginForm';
import Background from '../../assets/colorful.png';
import Footer from './components/Footer';


const LoginPage = () => {
    return (
        <Box className="background" w="100%" h="100%" p={0} backgroundImage={`url(${Background})`}>
            <Center h="100%" w="100%" color="black">
                <HStack divider={<StackDivider  borderColor="gray.400" />} spacing="7rem" h="400px">

                    <Box className="hstack-container">
                        <Container>
                            <Center>
                                <VStack>
                                    <Heading 
                                        as="h3" 
                                        width="650px" 
                                        textAlign="center" 
                                        fontFamily="Paytone One" 
                                        fontSize="100px">
                                    Work it, Girl!
                                    </Heading>
                                    <Text fontSize="3xl">
                                        Free Clothes for Working Women.
                                    </Text>
                                </VStack>
                            </Center>
                        </Container>
                    </Box>

                    <Box className="hstack-container" width="400px" height="450px">
                        <LoginForm></LoginForm>
                    </Box>
                </HStack>
            </Center>


            <Footer/>
        </Box>
    )
}


export default LoginPage;
