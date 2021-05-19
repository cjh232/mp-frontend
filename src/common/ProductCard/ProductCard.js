import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'holderjs';

const CardStyles = styled.div`

    .card {
        width: 15.5rem;
        height: 20rem;
        border-radius: 2px;
    }

    .card_col {
        margin-top: 2rem;
        cursor: pointer;
    }

    .title {
        font-size: .9rem;
    }

    .card-body {
        padding:11px;
    }
`;

const ProductCard = (props) => {

    return (
        <CardStyles>
            <Col className="card_col">
                <Card className="card" onClick={() => props.goToProductPage(props.id)}>
                    <Card.Img variant="top" className="img" src="holder.js/100px250" />
                    <Card.Body>
                        <Card.Text>
                            <p className="text-muted title">{props.title}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </CardStyles>
    )
}

export default ProductCard