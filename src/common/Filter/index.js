import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react"

import CategoryFilter from './components/CategoryFilter';
import BrandFilter from './components/BrandFilter';
import SizeFilter from './components/SizeFilter';
import { SmallAddIcon } from '@chakra-ui/icons'


function Filter(props) {

    const type = props.type;

    return (
        <Box>
            <Accordion allowToggle allowMultiple>
                <SizeFilter />
                <BrandFilter />
                <CategoryFilter />
            </Accordion>
        </Box>
    )
}



export default Filter;