import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from './components/LoginForm'

const Styles = styled.div`

    .login-text {
        font-weight: 700;
        line-height: 1;
        margin-bottom: 1rem;
    }

    .fs-4 {
        font-size: 1.5rem;

    }

    .divider {
        border-left: 1px dashed grey;
        height: 300px;
        left: 50%;
        margin-left: 25px;
    }

    .vh {
        height: calc(100vh - 90px)
    }

    .footer {
        background-color: grey;
    }
`

const Login = () => {

    return (
        <Styles>
            <Container styles={{height: '100vh'}}>
                <Row className="align-items-center justify-content-center vh">
                    <Col lg={6} className="align-items-center text-center">
                        <h2 className="display-4 login-text">Sign in to Mitzy's People</h2>
                        <p className="fs-4">Sign in to see our collection of clothing, free to all you working women!</p>
                    </Col>
                    <Col>
                        <div className="divider">
                        </div>
                    </Col>
                    <Col lg={5}>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </Styles>
    )

}

export default Login;