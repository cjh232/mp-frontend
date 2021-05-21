import React from 'react';
import { 
        Box, 
        Flex, 
        Divider, 
        HStack, 
        Heading,
        Text,
        Container,
        Square,
        Skeleton
          } from '@chakra-ui/react';

import ProductDescription from './ProductDescription'
import ProductHeading from './ProductHeading';
import ProductSizes from './ProductSizes';

function ProductInfo ({details, brand, title, cat, subCat, isLoaded}) {

    const availableSizes = [
        "S",
        "M",
        "L",
        "XL",
        "P"
    ]

    return (
        
        <Box p={1} w="500px" h="700px" ml="4rem">
            <Flex direction="column" justify="start">

                <Skeleton isLoaded={isLoaded}>
                    <ProductHeading title={title} cat={cat} subCat={subCat} brand={brand}/>
                </Skeleton>

                <Divider my="3rem" orientation="horizontal" />

                <Skeleton isLoaded={isLoaded}>
                    <ProductDescription details={details} />
                </Skeleton>

                <Divider my="3rem" orientation="horizontal" />

                <Skeleton isLoaded={isLoaded}>
                    <ProductSizes sizes={availableSizes}/>
                </Skeleton>
                
            </Flex>
        </Box>
    )
}


export default ProductInfo;