import React from 'react';
import { Flex } from '@chakra-ui/react';


export default function NavBarContainer ({children, ...props}) {

    return (
        <Flex {...props}>
            {children}
        </Flex>
    )
}