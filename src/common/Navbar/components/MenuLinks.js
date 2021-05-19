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
        Text,
        Flex
      } from '@chakra-ui/react';
import { 
    HiOutlineHome, 
    HiOutlineShoppingBag,
     HiOutlineNewspaper, 
     HiOutlineLogin, 
     HiUserAdd, 
     HiMenu,
     HiOutlineMailOpen,
     HiOutlineUserCircle,
     HiOutlineShoppingCart,
     HiOutlineLogout
     } from 'react-icons/hi';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutWatcher } from '../../../actionCreators/authCreators';


function MenuLinks(props) {

    const authState = useSelector(state => state.AuthReducers.AuthState)
    const history = useHistory()

    const logout = () => {
        props.logoutWatcher({history: history});
    }


    const renderAuthOptions = () => {
        if (authState.isLogged) {
            return (<AccountMenu onLogout={logout} firstName={authState.name} />)
        } else {
            return (
                <React.Fragment>
                    <Tooltip label="Sign Up" aria-label="Sign Up">
                        <Link 
                            _hover={{ color: "pink.400" }} 
                            color="#a0aec0"><Icon as={HiUserAdd} w={6} h={6}/></Link>
                    </Tooltip>

                    <Tooltip label="Log In" aria-label="Log In">
                        <Link 
                            _hover={{ color: "pink.400" }} 
                            color="#a0aec0"
                            href="/login"
                            ><Icon as={HiOutlineLogin} w={5} h={5}/></Link>
                    </Tooltip>
                </React.Fragment>
            )
        }
    }


    return (
            <HStack spacing="1.2rem" h="20px">

            <Tooltip label="Home" aria-label="Home">
                <Link _hover={{ color: "pink.400" }} color="#a0aec0"><Icon as={HiOutlineHome} w={5} h={6}/></Link>
            </Tooltip>

            <Tooltip label="Products" aria-label="Products">
                <Link _hover={{ color: "pink.400" }} color="#a0aec0"><Icon as={HiOutlineShoppingBag} w={5} h={6}/></Link>
            </Tooltip>

            <Tooltip label="News" aria-label="News">
                <Link _hover={{ color: "pink.400" }} color="#a0aec0"><Icon as={HiOutlineNewspaper} w={5} h={6}/></Link>
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
                color="#a0aec0"
                _hover={{cursor: 'pointer'}}
                ><HiMenu size="20px"/></MenuButton>
            <MenuList>
            <MenuGroup   title={`Hey, ${props.firstName}!`}>
                <MenuDivider />
                <MenuItem icon={<HiOutlineMailOpen size="18px"/>}>
                    <Text fontSize="14px">Messages (3)</Text>
                </MenuItem>

                <MenuItem icon={<HiOutlineUserCircle size="18px"/>}>
                    <Text fontSize="14px">Profile</Text>
                </MenuItem>

                <MenuItem icon={<HiOutlineShoppingCart size="18px"/>}>
                    <Text fontSize="14px">Cart (2)</Text>
                </MenuItem>

                <MenuDivider />

                <MenuItem icon={<HiOutlineLogout size="18px"/>} onClick={() => props.onLogout()}>
                    <Text fontSize="14px">Log Out</Text>
                </MenuItem>
            </MenuGroup>
            </MenuList>
        </Menu>
    )
}

