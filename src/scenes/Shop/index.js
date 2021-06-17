import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { 
    Box, 
    Center, 
    Flex, 
    Divider,
    Text } from '@chakra-ui/react'

// Components
import Navbar from '../../common/Navbar'
import Gallery from '../../common/Gallery'
import Filter from '../../common/Filter';
import FilterHeadingCards from './components/FilterHeadingCards';

// Redux
import { shopDetailsWatcher } from '../../redux/actionCreators/productCreators';
import { bindActionCreators } from 'redux';
import { useSelector, connect } from 'react-redux';


const Shop = (props) => {

    let { category } = useParams();

    useEffect(() => {
        props.shopDetailsWatcher(category)
    }, [props, category])

    return (
        <Box>
            <Navbar />
            <Center className="page-content" w="100%">
                <Flex direction="column" w="1440px" justifyContent="center">
                    <FilterHeadingCards mb="2rem" filterSelected={"All"}/>
                    <Divider orientation="horizontal" />

                    <Flex direction="row" mt="2rem">

                        <Box  w="250px" h="500px" mr="1rem">
                            <Filter size brand category type="search" />
                        </Box>                  
                    
                        <Gallery />

                    </Flex>

                    
                </Flex>
            </Center>
        </Box>
    )
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        shopDetailsWatcher,
      // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Shop);
