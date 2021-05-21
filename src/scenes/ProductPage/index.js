import React from 'react';
import { useParams } from "react-router-dom";
import Navbar from '../../common/Navbar'
import { Box, Flex, Center, Divider, HStack, Image  } from '@chakra-ui/react';

// Components
import ProductInfo from './components/ProductInfo';

// Redux
import { productFetchWatcher } from '../../actionCreators/productCreators';
import { bindActionCreators } from 'redux';
import { useSelector, connect } from 'react-redux';


function ProductPage(props) {

    let { id } = useParams();

    const productDetails = useSelector(state => state.ProductReducers.ProductDetails)

    React.useEffect(() => {
        props.productFetchWatcher(id)
    }, [])

    return (
        <Box>
            <Navbar />
            <Center className="page-content" w="100%" top="150px">
                <Flex direction="column" w="1440px" justifyContent="center">
                    <HStack spacing={20}>
                    <Image w="657px" h="700px" src="gibbresh.png" fallbackSrc="https://via.placeholder.com/657x986" />
                    <ProductInfo 
                    isLoaded={productDetails.loaded}
                    title={productDetails.title}
                    brand={productDetails.brand}
                    cat={productDetails.categoryName}
                    subCat={productDetails.subCategoryName}
                    details={productDetails.details} />
                    </HStack>
                </Flex>
            </Center>
        </Box>
    )
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        productFetchWatcher
      // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductPage);
