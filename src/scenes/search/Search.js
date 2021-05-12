import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import CustomNavbar from '../../common/Navbar/Navbar'
import axios from 'axios';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'


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
`


const Search = (props) => {

    const searchQuery = props.location.state.query;
    const searchResults = props.location.state.results

    return (
        <div>
        <PageStyles>
            <CustomNavbar />
            <Container className="page-container">
                <Row className="outer-row query-title">
                    <Col style={{'paddingTop': '1rem'}}>
                        <h2 className="display-5">{searchQuery}</h2>
                        <p className="text-muted">Search results: <br/> {searchResults.length} items found</p>
                        <p>{props.location.state.detail}</p>
                    </Col>
                </Row>
                <Row>
                
                </Row>
            </Container>
        </PageStyles>
        </div>
    )
}


export default Search;