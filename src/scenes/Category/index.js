import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Grid, Center, Flex, Divider, Heading, Text } from '@chakra-ui/react'

// Components
import Navbar from '../../common/Navbar'
import ProductCard from '../../common/ProductCard/ProductCard';
import Filter from '../../common/Filter';

// Redux
import { shopLoadWatcher } from '../../redux/actionCreators/productCreators';
import { bindActionCreators } from 'redux';
import { useSelector, connect } from 'react-redux';

const Category = (props) => {

    const productList = useSelector(state => state.ProductReducers.ProductList)

    const history = useHistory();
    let { category } = useParams();
    let upperCaseCategory = category.charAt(0).toUpperCase() + category.slice(1)

    const productSelected = (id) => {
        history.push(`/shop/product/${id}/`)
    }

    useEffect(() => {
        console.log(category)
        props.shopLoadWatcher({
            category__name: upperCaseCategory
        })
    }, [])

    return (
        <Box>
            <Navbar />
            <Center className="page-content" w="100%">
                <Flex direction="column" w="1440px" justifyContent="center">

                    <Heading fontSize="42px">{upperCaseCategory}</Heading>
                    <Text color="grey" fontSize="14px">{productList.length} result{(productList.length !== 1) ? 's' : ''}</Text>
                    <Divider my="2rem" orientation="horizontal" />
                    <Flex w="100%" justify="space-between">
                        <Text mt="2rem" fontSize="14px"> Filter By: </Text>
                        <Text mt="2rem" fontSize="20px"> - View {upperCaseCategory} - </Text>
                        <Text mt="2rem" fontSize="14px"> {productList.length} items </Text>
                    </Flex>

                    <Flex direction="row" mt="2rem">
                        <Box  w="250px" h="500px" mr="1rem">
                            <Filter brand size type="search" />
                        </Box>
                    
                        <Grid 
                        w="calc(1440px - 250px)"
                        templateColumns="repeat(4, 1fr)"
                        gap={4}
                        >
                            {productList.map((result) => {
                                return (<ProductCard 
                                            title={result.title} 
                                            brand={result.brand} 
                                            productSelected={productSelected}
                                            id={result.id}
                                            category={result.category_name}/>)
                            })}
                            
                        </Grid>
                    
                    
                    </Flex>

                    
                </Flex>
            </Center>
        </Box>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        shopLoadWatcher
      // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Category);