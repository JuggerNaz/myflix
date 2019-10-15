import React from 'react'
import { Flex, Box, Heading, Text } from 'rebass'
import styled from 'styled-components'
import * as faRegular from 'styled-icons/fa-regular/'

//local
import Container from './Container'
import CtaButton from '../core/CtaButton'

const CustomContainer = styled(Container)`
    background: rgb(134,37,205);
    background: linear-gradient(45deg, rgba(134,37,205,1) 0%, rgba(200,49,216,1) 100%);
    -webkit-box-shadow: inset 0px -5px 7px -5px rgba(0,0,0,0.5); 
    box-shadow: inset 0px -5px 7px -5px rgba(0,0,0,0.5);
`

const Handshake = styled(faRegular.Handshake)`
    color: #fff;
`

const Header = props =>
    <CustomContainer 
        bleed={true}
        height={['100px','200px']}
        flexDirection='column'
        color='white'
        px={2}
    >
        <Container
            bleed={true}
            justifyContent='center'
        >
            <Container
                mt={5}
                flexDirection='row'
                justifyContent='space-between'
            >
                <Flex
                    flexDirection='column'
                    mt={4}
                >
                    <Text>Welcome to myFlix!</Text><br />
                    <Heading 
                        as='h1'
                        fontFamily='nunito'
                        letterSpacing='1px'
                    >
                        Let's browse the list!
                    </Heading>
                </Flex>
                <Box>
                    <Handshake size='170' />
                </Box>
            </Container>
        </Container>
    </CustomContainer>

export default Header