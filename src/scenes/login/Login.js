import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from './components/LoginForm'
import Background from '../../assets/memphis.png';


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
        border-left: 1px solid grey;
        height: 400px;
        left: 50%;
        margin-left: 15px;
    }

    .vh {
        height: calc(100vh - 90px)
    }

    .footer {
        background-color: grey;
    }

    .login-container {
        height: 100vh;
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #f5f5f5;
        font-weight: 700;
    }

    .background {
        background-image: url(${Background});
        opacity: 1;
    }


`

const Login = () => {

    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('jwt_token')) {
            history.push('/home');
        }
    }, [])

    return (
        <Styles>
            <div className="background">
                <Container className="login-container">
                    <Row className="align-items-center justify-content-center vh">
                        <Col lg={6} className="align-items-center text-center">
                            <h2 className="display-2 login-text">Work it Girl!</h2>
                            <p className="fs-4">Free clothing for working women!</p>
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
            </div>
            <footer className="footer">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col className="align-items-center text-center">
                            <span className="text-muted">
                                <a className="text-muted footer-nav" href="/home">Just wanna see what's available?</a>
                            </span>
                        </Col>
                        <Col className="align-items-center text-center">
                            <span className="text-muted footer-nav">
                               -- Mitzy's People --
                            </span>
                        </Col>
                        <Col className="align-items-center text-center">
                            <span className="text-muted footer-nav">
                                ReactJS / Bootstrap / Django
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Styles>
    )

}

export default Login;