import React from 'react';
import { Box, VStack, Flex, Divider, GridItem, Image, Container, Text } from '@chakra-ui/react';

function ProductCard({title, brand, img, category}) {


    return (
        <GridItem w="282.12px" h="512px" _hover={{cursor: "pointer"}}>
            <VStack>
                <Image w="100%" h="430px" src="gibbresh.png" fallbackSrc="https://via.placeholder.com/280x429" />
                <Container p={0} mt="2px">
                    <Text color="gray.500" fontSize="14px" isTruncated>{title}</Text>
                    <Text as="sup" fontSize="12px" color="gray.500" isTruncated>{brand}</Text>
                </Container>
            </VStack>
        </GridItem>
    )
}

export default ProductCard;