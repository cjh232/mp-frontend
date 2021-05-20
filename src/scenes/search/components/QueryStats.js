import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';


function QueryStats({query, resultLength}) {



    return (
        <Flex 
            h="150px" 
            w="100%"
            justify="center" 
            direction="column" 
            p="2rem">
        <Text fontSize="20px">You searched for <b>"{query}"</b></Text>
        <Text color='gray.500'>
            {resultLength} result{(resultLength > 1 || resultLength === 0) ? 's' : '' }
            </Text>
        </Flex>
    )
}

export default QueryStats;