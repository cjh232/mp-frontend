import React from 'react';
import { Container, Text } from '@chakra-ui/react';


function ProductDescription({details})  {
    return (
        <Container p={0}>
            <Text mb="1rem" color="gray.500">Details</Text>
            <Text fontSize="14px" textAlign="justify">{details}</Text>
        </Container>
    )
}

export default ProductDescription;