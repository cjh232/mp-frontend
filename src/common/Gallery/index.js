import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { 
    Box, 
    Grid,
    Center, 
    Flex, 
    Divider,
    Heading,
    Text, 
    HStack,
    VStack} from '@chakra-ui/react'

// Components
import ProductCard from '../ProductCard/ProductCard'
import Meta from './components/Meta'

// Redux
import { shopDetailsWatcher } from '../../redux/actionCreators/productCreators';
import { bindActionCreators } from 'redux';
import { useSelector, connect } from 'react-redux';

const capitalize = (str) => {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)

}


const Gallery = (props) => {

    const productsList = useSelector(state => state.ProductReducers.ShopDetails.productList)
    const parent = useSelector(state => state.ProductReducers.ShopDetails.category.parent)
    const history = useHistory()
    let { category } = useParams();

    const productSelected = (id) => {
        history.push(`/shop/product/${id}/`)
    }

    return (
        <VStack spacing={3}>
            <Meta numItems={productsList.length} category={capitalize(category)} parent={parent} />
            <Grid 
            w="calc(1440px - 250px)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
            >
                {productsList.map((result) => {
                    return (<ProductCard 
                                title={result.title} 
                                brand={result.brand} 
                                productSelected={productSelected}
                                id={result.product_id}
                                category={result.category_name}/>)
                })}
                
            </Grid>
        </VStack>
    )


}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        shopDetailsWatcher,
      // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Gallery);
