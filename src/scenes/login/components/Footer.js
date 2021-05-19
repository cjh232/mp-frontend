import React from 'react';
import { Box, Stack, Flex, Divider, Text, Center, Link, StackDivider  } from '@chakra-ui/react';
import { FaReact, FaPython } from 'react-icons/fa'
import { SiRedux, SiDjango, SiJavascript } from 'react-icons/si'
import { DiJavascript } from 'react-icons/di'


export default function Footer() {


    return (
        <Box
            as="footer"
            role="contentinfo"
            mx="auto"
            maxW="7x1"
            py="0"
            bg="pink.500"
            px={{
            base: '4',
            md: '8',
            }}
            height="3rem"
            bottom="0"
            position="absolute"
            width="100%"
        >
            <Stack>
            <Stack color="white" direction="row" spacing="3" align="center" justify="space-between">
                <Center h="3rem">
                    <Stack direction="row" h="20px" divider={<StackDivider direction="vertical"/>}>
                        <Flex 
                            width="60px"
                            justify="space-between" 
                            alignItems="center"> 
                            <FaReact/> <Text>React</Text>
                        </Flex>
                        <Flex 
                            width="65px" 
                            justify="space-between" 
                            alignItems="center"> 
                            <SiRedux/> <Text>Redux</Text>
                        </Flex>
                        <Flex 
                            width="95px" 
                            justify="space-between" 
                            alignItems="center"> 
                            <SiJavascript/> <Text fontSize="16px"> JavaScript</Text>
                        </Flex>
                        <Flex 
                            width="70px" 
                            justify="space-between" 
                            alignItems="center"> 
                            <FaPython/> <Text fontSize="16px"> Python</Text>
                        </Flex>
                        <Flex 
                            width="70px" 
                            justify="space-between" 
                            alignItems="center"> 
                            <SiDjango/> <Text fontSize="16px"> Django</Text>
                        </Flex>
                    </Stack>
                </Center>
                <Center h="3rem"><Link>Want to see what's available?</Link></Center>
            </Stack>
 
            </Stack>
        </Box>
    )
}