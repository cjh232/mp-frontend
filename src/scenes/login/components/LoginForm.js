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
        border-radius: 10px;
        height: 45px;
    }

    .alert {
        z-index: 5;
        margin-top: 5rem;
        right: 1rem;
        width: 445px;
        position: absolute;
    }

`

const LoginForm = () => {

    const [errorShow, setErrorShow] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const savedEmail = localStorage.getItem('email');
    const autoFillEmail = (savedEmail ? savedEmail : '');

    const login = (jwt_pair) => {
        localStorage.setItem('jwt_token', JSON.stringify(jwt_pair))
    }

    const formErrorMsg = (responseData) => {
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

        const credentials = {
            email: values.email,
            password: values.password
        }

        try {
            let res = await axios.post('http://localhost:8000/users/login', 
                                        credentials, 
                                        {withCredentials: true});
            console.log(res.data)

            login({
                token: res.data.access_token,
                expiry: '2'
            }) 

            if(values.remember) {
                localStorage.setItem('email', values.email)
            }

        } catch(error) {
            setErrorShow(true)
            formErrorMsg(error.response.data)
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
                initialValues={{email: autoFillEmail, password: '', remember: false}}
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
                <Form noValidate onSubmit={handleSubmit} className="p-4 p-md-5 border rounded bg-light">
                    <Form.Group controlId="validationFormEmail">
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

                    <Form.Group>
                        <Form.Check 
                            custom
                            type="switch"
                            name="remember"
                            onChange={handleChange}
                            id={`custom-checkbox`}
                            label={`Remember me?`}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button 
                        variant="primary" 
                        type="submit" 
                        block 
                        disabled={isSubmitting}>Log In</Button>
                        <Button variant="secondary" type="" block>Sign Up</Button>
                        {errorShow && <FailedLoginAlert 
                                        setErrorShow={setErrorShow} 
                                        msg={errorMsg} className="alert"/>}
                    </Form.Group>
                       
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