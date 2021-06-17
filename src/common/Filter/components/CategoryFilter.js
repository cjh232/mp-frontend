import React from 'react';
import {
    AccordionItem,
    AccordionPanel,
    AccordionButton,
    Box,
    VStack, 
    Link
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux';


function CategoryFilter(props) {

    const categoryList = useSelector(state => state.ProductReducers.ShopDetails.category.children)
    const parent = useSelector(state => state.ProductReducers.ShopDetails.category.parent)


    // May change in the future
    const returnTitle = (parent == null) ? 'All' : `All ${parent}`
    const returnRef = (parent == null) ? 'all': parent.toLowerCase()
    

    return (
        <AccordionItem>
            <h2>
                <AccordionButton _focus={{boxShadow: "none"}} h="50px">
                    <Box flex="1" textAlign="left" alignContent="center">
                        Categories
                    </Box>
                    <SmallAddIcon />
                </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
                <VStack spacing={2}>
                    <Box flex="1" textAlign="left" w="100%">
                        <Link fontSize="14px" href={`/shop/${returnRef}`}>{returnTitle}</Link>
                    </Box>
                    
                    {categoryList.map((category) => {
                        return (
                            <Box flex="1" textAlign="left" w="100%">
                                <Link fontSize="14px" href={`/shop/${category.name.toLowerCase()}`}>{category.name}</Link>
                            </Box>
                        )
                    })}    
                </VStack>
            </AccordionPanel>

        </AccordionItem>
    )
}

export default CategoryFilter;