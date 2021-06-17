import React from 'react';
import { Center } from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import styled from 'styled-components';

const Styles = styled.div`

    .show-pswd-btn {
        cursor: pointer;
    }

`

export default function PasswordShowButton(props) {

    return (
        <Styles>
            <Center className="show-pswd-btn" ml="1.2rem" mt=".9rem">
                {props.showPassword ? 
                    <AiFillEyeInvisible size={20} color="gray" onClick={props.toggle}/> 
                    : 
                    <AiFillEye size={20} color="gray" onClick={props.toggle}/> 
                }
            </Center>
        </Styles>
    )

}
