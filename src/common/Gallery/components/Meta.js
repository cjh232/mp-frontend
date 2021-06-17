import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { 
    Box, 
    Grid,
    Center, 
    Flex, 
    Divider,
    Heading,
    Text } from '@chakra-ui/react'


const Meta = ({numItems, category}) => {

    return (
        <Flex w="100%" justify="space-between">
            <Text fontSize="20px"> Women's {category} </Text>
            <Text fontSize="14px"> {numItems} items </Text>
        </Flex>
    )

}

export default Meta