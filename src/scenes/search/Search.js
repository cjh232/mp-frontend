import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Grid, Center, Flex, Divider } from '@chakra-ui/react'

// Components
import Navbar from '../../common/Navbar'
import  QueryStats  from './components/QueryStats'
import ProductCard from '../../common/ProductCard/ProductCard';
import Filter from '../../common/Filter';

// Redux
import { searchWatcher } from '../../actionCreators/searchCreators';
import { bindActionCreators } from 'redux';
import { useSelector, connect } from 'react-redux';

const Search = (props) => {

    const searchStats = useSelector(state => state.SearchReducer)

    const searchResults = searchStats.results;
    const history = useHistory();

    const productSelected = (id) => {
        history.push(`/catalog/product/${id}/`)
    }


    // If page is reloaded, run the search again.
    useEffect(() => {
        const reloadSearch = () => {
            props.searchWatcher({
                query: searchStats.query,
                history: null
            })
    
        }
        reloadSearch()

    }, [])

    return (
        <Box>
            <Navbar />
            <Center className="page-content" w="100%">
                <Flex direction="column" w="1440px" justifyContent="center">
                    <QueryStats query={searchStats.query} resultLength={searchStats.results.length} />
                    <Divider orientation="horizontal" />

                    <Flex direction="row" mt="2rem">
                        <Box  w="250px" h="500px" mr="1rem">
                            <Filter type="search" />
                        </Box>
                    
                        <Grid 
                        w="calc(1440px - 250px)"
                        templateColumns="repeat(4, 1fr)"
                        gap={4}
                        >
                            {searchResults.map((result) => {
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
        searchWatcher
      // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
