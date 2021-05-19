import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    useBoolean,
    InputRightElement,
    Switch ,
    Link,
    useToast,
  } from '@chakra-ui/react';
import PasswordShowButton from './PasswordShowButton';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "@hookform/error-message";

/** Redux */
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginWatcher } from '../../../actionCreators/session';

import { BsBoxArrowInRight } from 'react-icons/bs'
import styled from 'styled-components';

const StyledLogin = styled.div`

  input#password, input#email {
      background-color:#f4f6f7;
  }

  input {
      border: 1px solid #b9c1ca;
      font-size: 16px;
      border-radius: 5px;
  }

  button {
      border-radius: 2px;
  }

  .error-msg {
      color: #bf1650;
      font-size: 14px;
  }
`

function LoginForm(props) {

    const [showPassword, setShowPassword] = useBoolean(false)
    const authState = useSelector(state => state.authState)
    const history = useHistory();
    const toast = useToast();

    useEffect(() => {
        if(authState.isLogged) {
            history.push('/home');
        }
    }, [])

    const CustomToast = () => {
        
        return toast({
            title: 'Login Failure',
            description: 'Incorrect email/password combination.',
            status: "error",
            duration: null,
            position: "top",
            isClosable: true,
        })
    }

    const schema = yup.object().shape({
        email: yup.string().email('Enter a valid email please.').required('Uh oh, you\'re missing your email...'),
        password: yup.string().required('You\'re missing your password...'),
        rememberUser: yup.boolean(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            rememberUser: false
          }
    })

    const submitLogin = (values) => {

        console.log(values)

        
        props.loginWatcher({
            email: values.email,
            password: values.password,
            history: history
        });


    }

    return (
        <StyledLogin>
            <Box 
                borderRadius="5px"
                minHeight="400px"
                width="400px"
                backgroundColor="#fafbfb"
                padding="2rem"
                color="gray.500"
                border="2px"
                borderColor="#dee2e6"
                boxShadow="md"
                >
                <form onSubmit={handleSubmit(submitLogin)}>

                    <Heading as="h4" size="md" mb="2rem">Welcome back!</Heading>

                    <FormControl 
                        id="email" 
                        paddingBottom="2rem" 
                        isRequired 
                        mt="1rem"
                        isInvalid={!!errors.email}
                        errortext={errors.email ? errors.email.message : ''}
                        >
                            <Input 
                                variant="outline"
                                type="email"
                                id="email"
                                placeholder="Email address"
                                size="lg"
                                onChange={() => console.log(errors)}
                                focusBorderColor="pink.300"
                                {...register("email")}
                            />
                            <ErrorMessage errors={errors} className="error-msg" name="email" as="p" />
                    </FormControl>

                    <FormControl id="password" isRequired>

                            <Input 
                                variant="outline"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                size="lg"
                                focusBorderColor="pink.300"
                                isInvalid={errors.password}
                                {...register("password")}
                            />
                            <InputRightElement width="4.5rem">
                            <PasswordShowButton showPassword={showPassword} toggle={setShowPassword.toggle}/>
                            </InputRightElement>
                            <ErrorMessage errors={errors} className="error-msg" name="password" as="p" />

                    </FormControl>

                    <FormControl display="flex" alignItems="center" mt="2rem">

                        <Switch 
                            id="email-alerts" 
                            size="sm" 
                            mt=".5rem" 
                            mr="1rem" 
                            colorScheme="pink"
                            name="rememberUser"
                            {...register("rememberUser")}
                            /> 
                        <FormLabel htmlFor="email-alerts" mb="0">
                            Remember me?
                        </FormLabel>   

                    </FormControl> 

                    <Button 
                        isFullWidth 
                        fontSize="20px"
                        marginTop="2rem" 
                        mb="1rem"
                        color="white" 
                        colorScheme="pink"
                        type="submit"
                        leftIcon={<BsBoxArrowInRight />}>Sign In</Button>
                    <Link >Need an account?</Link>                    
                </form>
            </Box>
        </StyledLogin>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loginWatcher
      // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);


    
 