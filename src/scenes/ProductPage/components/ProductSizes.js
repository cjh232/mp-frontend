import React from 'react';
import { HStack, Square, Text, Box } from '@chakra-ui/react';


function ProductSizes({sizes}) {
    return (
        <Box>
            <Text mb="1rem" color="gray.500">Sizes</Text>           
            <HStack>
                
                {sizes.map((size) => {
                    return (
                        <Square 
                        size="40px" 
                        border="1px" 
                        borderColor="gray.400"
                        _hover={{color: "gray.600", borderColor: "gray.600", bg: "gray.200"}}
                        >
                            {size}
                        </Square>
                    )
                })}
            
            </HStack>
        </Box>
    )
}

export default ProductSizes;