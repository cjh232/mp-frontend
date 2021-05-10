import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';

const Styles = styled.div`

    input, button {
        border-radius: 20px;
    }

    .alert {
        z-index: 5;
        margin-top: 1rem;
        position: absolute;
    }

`

const LoginForm = () => {

    const [errorShow, setErrorShow] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const login = (jwt_pair) => {
        localStorage.setItem('jwt_token', JSON.stringify(jwt_pair))
    }

    const renderErrorMsg = (responseData) => {
        let msg = responseData.detail;

        switch(msg) {
            case 'Locked Account':
                setErrorMsg('Too many failed login attempts. Account is locked.');
                break;
            case 'Bad Credentials':
                setErrorMsg("The email and password you entered didn't match our records.");
                break;
            default :
                setErrorMsg("Something unkown went wrong");
        }
    }

    const submitLogin = async (values) => {

        try {
            let res = await axios.post('http://localhost:8000/users/login', 
                                        values, 
                                        {withCredentials: true});
            console.log(res.data)
            login({
                token: res.data.access_token,
                expiry: '2'
            }) 

        } catch(error) {
            setErrorShow(true)
            renderErrorMsg(error.response.data)
            console.log(error.response)
        }    
    }

    const schema = yup.object().shape({
        email: yup.string().email().required('*Email is required.'),
        password: yup.string().required('*Password is required.'),
      });


    return (
        <Styles>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => submitLogin(values)}
                validationSchema={schema}
                validateOnBlur={false}
                validateOnChange={false}
            >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
                isSubmitting
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="validationFormEmail">
                        <Form.Label>Email address:</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control 
                                type="email" 
                                name="email"
                                value={values.email}
                                placeholder='Enter email'
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.email}
                                onChange={handleChange} />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="validationFormPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                value={values.password}
                                required 
                                isInvalid={!!errors.password}
                                isValid={touched.password && !errors.password}
                                onChange={handleChange} />

                            <Form.Control.Feedback type="invalid">
                            {errors.password}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>


                    <Button 
                        variant="primary" 
                        type="submit" 
                        block 
                        disabled={isSubmitting}>Log In</Button>
                    <Button variant="secondary" type="submit" block>Sign Up</Button>
                    {errorShow && <FailedLoginAlert setErrorShow={setErrorShow} msg={errorMsg} className="alert"/>}
                </Form>
            )}
            
            </Formik>
                
        </Styles>
    )

}

function FailedLoginAlert(props) {
        
    return (
        <Alert variant="danger" onClose={() => props.setErrorShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
            {props.msg}
            </p>
            <Alert.Link>Forgot your password?</Alert.Link>
        </Alert>
    );


}

export default LoginForm;