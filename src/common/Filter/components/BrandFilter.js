import React from 'react';
import {
    Radio,
    RadioGroup, 
    AccordionItem,
    AccordionPanel,
    AccordionButton,
    AccordionIcon,
    Box,
    VStack, 
    Text
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons'
import Option from './Option';


function BrandFilter(props) {

    const [activeOptions, setActiveOptions] = React.useState(0)

    const options = {
        "Adidas": false,
        "Champion": false,

    }


    const optionClicked = (value, status) => {
        options[value] = status;
        
        if(!status) {
            setActiveOptions(activeOptions - 1)
        } else {
            setActiveOptions(activeOptions + 1)
        }
    }                

    return (
        <AccordionItem>
            <h2>
                <AccordionButton _focus={{boxShadow: "none"}} h="50px">
                    <Box flex="1" textAlign="left" alignContent="center">
                        Brand {activeOptions > 0 ? `(${activeOptions})` : ''}
                    </Box>
                    <SmallAddIcon />
                </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
                <VStack spacing={2}>
                    {Object.entries(options).map((option) => {
                        return (<Option value={option[0]} isActive={option[1]} onClick={optionClicked} />)
                    })}    
                </VStack>
            </AccordionPanel>

        </AccordionItem>
    )
}

export default BrandFilter;