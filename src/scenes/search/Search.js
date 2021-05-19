import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Navbar from '../../common/Navbar'
import axios from 'axios';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import ProductCard from '../../common/ProductCard/ProductCard';



const PageStyles = styled.div`

    .page-container {

    }

    .outer-row {
        padding-right: 15px;
        padding-left: 15px;
    }

    .query-title {
        border-bottom: 1px solid #dee2e6;
        padding-bottom: 1px;
    }

    .query-text {
        font-size: 1.5rem;
    }
`


const Search = (props) => {

    const searchQuery = props.location.state.query;
    const searchResults = props.location.state.results
    const history = useHistory();

    console.log(searchResults)

    const [results, setResults] = useState(searchResults);
    const [query, setQuery] = useState(searchQuery);

    const goToProductPage = (id) => {
        history.push(`products/${id}`);
    }

    return (
        <div>
        <PageStyles>
            <Navbar />
            <Container className="page-container">
                <Row className="outer-row query-title">
                    <Col style={{'paddingTop': '1rem'}}>
                        <h2 className="display-5 query-text">You searched for "{searchQuery}"</h2>
                        <p className="text-muted">
                            Search results: <br/> {searchResults.length} item{searchResults.length > 1 ||  searchResults.length === 0 ? 's' : ''} found
                        </p>
                    </Col>
                </Row>
                <Row className="outer-row align-items-center" md={4}>
                    {searchResults.map((product) => {
                        return (<ProductCard title={product.title} id={product.id} goToProductPage={goToProductPage} />)
                    })} 
                </Row>
            </Container>
        </PageStyles>
        </div>
    )
}


export default Search;