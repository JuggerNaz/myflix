import React from 'react'
import { Flex, Box, Heading, Text, Image } from 'rebass'
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
        height={['150px','250px']}
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
                    {
                        props.bgImage ?
                            <Image src={props.bgImage} />
                            :
                        <React.Fragment>
                                <Text>Welcome to myFlix!</Text><br />
                                    <Heading
                                        as='h1'
                                        fontFamily='nunito'
                                        letterSpacing='1px'
                                    >
                                        Let's browse the list!
                                </Heading>
                        </React.Fragment>
                    }
                </Flex>
                <Flex
                    justifyContent='center'
                    flexDirection='column'
                >
                    {
                        props.title ?
                            <Text
                                fontFamily='nunito'
                                fontSize='18px'
                                fontWeight='700'
                                mb={2}
                                letterSpacing={1}
                            >{props.title}</Text>
                        :
                            <></>   
                    }
                </Flex>
            </Container>
        </Container>
    </CustomContainer>

export default Header