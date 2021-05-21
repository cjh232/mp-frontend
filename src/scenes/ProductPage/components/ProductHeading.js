import React from 'react';
import { Container, Text, Heading } from '@chakra-ui/react';


function ProductHeading({title, cat, subCat, brand}) {
    return (
        <Container padding={0}>
            <Heading fontSize="32px">{title}</Heading>
            <Text fontSize="20px">{brand}</Text>
            <Text fontSize="12px">{cat} / {subCat}</Text>
        </Container>
    )
}

export default ProductHeading;