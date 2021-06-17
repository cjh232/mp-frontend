import React from 'react';
import {
    Box, 
    Center,
    Text,
    Flex,
    useBoolean
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const OptionStyles = styled.div`

    .active_option {
        background-color: 
    }

`;


function Option({value, optionSelected, isActive, onClick}) {

    const [active, setActive] = useBoolean(false);

    const onOptionClicked = () => {
        onClick(value, !active)
        setActive.toggle()
    }

    return (
        <Box
            border="0px"
            borderColor="gray.300"
            color={active ? "gray.600" : "gray.400"}
            bg=""
            w="150px"
            h="40px"
            align="center"
            _hover={{color: "gray.900", borderColor: "gray.600"}}
            onClick={onOptionClicked}
        >
            <Flex w="100%" h="100%" direction="column">
                <Text fontSize="12px" isTruncated>{value}</Text>
            </Flex>
        </Box>
    )
}

export default Option;