import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { 
    Box, 
    Grid,
    Center, 
    Flex, 
    Divider,
    Heading,
    Link,
    Text } from '@chakra-ui/react'


const Meta = ({numItems, category, parent}) => {

    return (
        <Flex w="100%" justify="space-between">
            <Text>
                <Link href={`/shop/${parent}`}>{parent}</Link> 
                {parent !== undefined && ' / '}
                {category}
            </Text>
            <Text fontSize="14px"> {numItems} items </Text>
        </Flex>
    )

}

export default Meta