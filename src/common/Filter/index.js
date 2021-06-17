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


function Filter({category, size, brand}) {

    return (
        <Box>
            <Accordion allowToggle allowMultiple defaultIndex={0}>
                {category && <CategoryFilter />}
                {size && <SizeFilter />}
                {brand && <BrandFilter />}
            </Accordion>
        </Box>
    )
}



export default Filter;