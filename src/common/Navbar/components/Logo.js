import React from 'react';
import { Heading, Text, Box, Icon, HStack } from '@chakra-ui/react';
import { SiCircleci } from 'react-icons/si';
import styled from 'styled-components';

const StyledLogo = styled.div`

    h1 { 
        text-shadow: 2px 2px #CBD5E0;
    }

`

export default function Logo () {
    return (
        <StyledLogo>
            <HStack spacing=".5rem">
                <Text>Logo</Text>
            </HStack>
        </StyledLogo>
    )
}