import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { searchWatcher } from '../../../actionCreators/session';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';
import { ImSearch } from 'react-icons/im';

const SearchStyles = styled.div`

    input {
        border-radius: 3px;
        height: 44px;
        border: 1px solid #E2E8F0;
    }

    input, select, textarea {
        color: #dee2e6l;
    }

`

function SearchBar (props) {

    const [query, setQuery] = useState('');
    const history = useHistory();

    const onInputChange = (event) => {
        setQuery(event.target.value);
    }

    const submitSearch = (event) => {
        event.preventDefault();
        props.searchWatcher({
            query,
            history
        })

    }

    return (
        <SearchStyles>
            <Box>
                <form onSubmit={submitSearch}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.400"
                            children={<ImSearch  />}
                            mb="rem"
                        />
                        <Input 
                            variant="outline" 
                            w="600px" 
                            placeholder="Search for something nice..."
                            shadow="base"
                            focusBorderColor="pink.300"
                            color="gray.500"
                            onChange={(event) => onInputChange(event)}/>
                    </InputGroup>
                </form>
            </Box>
        </SearchStyles>
    )
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchWatcher
      // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);