import React from 'react';
import { useHistory } from 'react-router-dom';
import { HStack, 
        Link, 
        Divider, 
        Tooltip, 
        Avatar, 
        Icon, 
        Menu, 
        MenuButton,
        MenuList,
        MenuDivider,
        MenuItem,
        MenuGroup, 
        Box
      } from '@chakra-ui/react';
import { HiHome, HiShoppingBag, HiNewspaper, HiLogin, HiPlus } from 'react-icons/hi';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutWatcher } from '../../../actionCreators/session';


function MenuLinks(props) {

    const authState = useSelector(state => state.authState)
    const history = useHistory()

    const logout = () => {
        props.logoutWatcher({history: history});
    }


    const renderAuthOptions = () => {
        if (authState.isLogged) {
            return (<AccountMenu onLogout={logout}/>)
        } else {
            return (
                <React.Fragment>
                    <Tooltip label="Sign Up" aria-label="Sign Up">
                        <Link 
                            _hover={{ color: "pink.400" }} 
                            color="#a0aec0"><Icon as={HiPlus} w={7} h={7}/></Link>
                    </Tooltip>

                    <Tooltip label="Log In" aria-label="Log In">
                        <Link 
                            _hover={{ color: "pink.400" }} 
                            color="#a0aec0"
                            href="/login"
                            ><Icon as={HiLogin} w={6} h={6}/></Link>
                    </Tooltip>
                </React.Fragment>
            )
        }
    }


    return (
            <HStack spacing="1.25rem" h="20px">
                <Tooltip label="Home" aria-label="Home">
                    <Link _hover={{ color: "pink.400" }} color="#a0aec0"><Icon as={HiHome} w={5} h={6}/></Link>
                </Tooltip>

                <Tooltip label="Products" aria-label="Products">
                    <Link _hover={{ color: "pink.400" }} color="#a0aec0"><Icon as={HiShoppingBag} w={5} h={6}/></Link>
                </Tooltip>

                <Tooltip label="News" aria-label="News">
                    <Link _hover={{ color: "pink.400" }} color="#a0aec0"><Icon as={HiNewspaper} w={5} h={6}/></Link>
                </Tooltip>
                
                <Divider orientation="vertical" colorScheme="gray" />

                {renderAuthOptions()}

            </HStack>
    )

}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      logoutWatcher
      // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(MenuLinks);

const AccountMenu = (props) => {
    return (
        <Menu>
            <MenuButton 
                w="27px"
                h="27px" 
                transition="all 0.2s"
                _hover={{cursor: 'pointer'}}
                as={Avatar}></MenuButton>
            <MenuList>
            <MenuGroup   title="Hey, Christian!">
                <MenuItem>Messages</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Cart</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => props.onLogout()}>Log Out</MenuItem>
            </MenuGroup>
            </MenuList>
        </Menu>
    )
}

