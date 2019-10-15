import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Heading, Link } from 'rebass'

//local
import Button from './Button'

const Navlink = styled(Link)`
    text-decoration: none;
    color: #480E87;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
`

const NavBarContainer = styled(Flex)`
    position: fixed;
    top: 0px;
    left: 0px;
    background: rgba(255,255,255,0.25);
`

const NavLogo = styled(Heading)`
    font-weight: 800;
    font-size: 28px;
    font-family: 'Nunito', sans-serif;
`

const Navbar = props =>
    <NavBarContainer
        alignItems='center'
        px={[2, 5]}
        py={3}
        width={1}
        height='50px'
        color='#480E87'
    >
        <NavLogo>myFlix</NavLogo>
        <Box mx='auto' />
        <Navlink href='#about' ml={2} px={3}>How</Navlink>
        <Navlink href='#readmore' ml={2} px={3}>Testimoni</Navlink>
        <Button>
            Login
        </Button>
        <Button>
            Register
        </Button>
    </NavBarContainer>

export default Navbar