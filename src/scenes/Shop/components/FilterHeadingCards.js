import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Box, 
    HStack,
    Center,
    Heading,
    Divider,
    Link
} from '@chakra-ui/react';


function FilterHeadingCards ({title, filterSelected, ...rest}) {

    const categories = [
        "Accessories",
        "Tops",
        "Bottoms",
        "Shoes"
    ]
    
    const history = useHistory();

    const categorySelected = (category) => {
        filterSelected(category)
        history.push(`/shop/${category.toLowerCase()}`)
    }

    return (
        <HStack spacing={8} justify="center" {...rest}>
        
            {categories.map((category) => {
                return (<HeadingCard title={category} categorySelected={categorySelected}/>)
            })}
        
        </HStack>
    )
}

function HeadingCard ({title, categorySelected}) {



    return (
        <Box 
            w="360px" 
            h="150px" 
            bg="pink.200" 
            _hover={{bg: 'pink.300'}}
            >
            <Link _hover={{textDecoration: 'none'}} href={`/shop/${title.toLowerCase()}`}>
                <Center h="100%" w="100%">
                    <Heading color="white" fontSize="28px">{title}</Heading>
                </Center>
            </Link>
        </Box>
    )
}


export default FilterHeadingCards;