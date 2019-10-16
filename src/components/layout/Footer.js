import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from 'rebass'

//local
import { Container, Row } from '../layout'

const StyledFooter = styled(Row)`
    background: #FB9DA0;
    -webkit-box-shadow: inset 0px 5px 7px -5px rgba(0,0,0,0.5); 
    box-shadow: inset 0px 5px 7px -5px rgba(0,0,0,0.5);
`

const StyledFooterItem = styled(Flex)`
    color: #480E87;
    width: 150px;
`

const StyledFooterItemHeading = styled(Text)`
    color: #480E87;
    font-weight: 800;
    font-size: 18px;
`

const StyledFooterItemContent = styled(Text)`
    color: #480E87;
    font-size: 13px;
    margin: 3px 0px;
`


const Footer = props =>
    <StyledFooter
        mt={4}
    >
        <Container
            flexDirection='row'
            
            py={3}
        >
            <StyledFooterItem
                flexDirection='column'
            >
                <StyledFooterItemHeading>
                    myFlix
                </StyledFooterItemHeading>
                <Text
                    fontSize='12px'
                >
                    @ Copyright 2019
                </Text>
            </StyledFooterItem>
            <StyledFooterItem
                flexDirection='column'
            >
                <StyledFooterItemHeading>
                    Contact
                </StyledFooterItemHeading>
                <StyledFooterItemContent>
                    nazrul.muhaimin@gmail.com
                </StyledFooterItemContent>
            </StyledFooterItem>
            <Flex mx='auto' ></Flex>
            <StyledFooterItem
                flexDirection='column'
            >
                <StyledFooterItemHeading>
                    Things
                </StyledFooterItemHeading>
                <StyledFooterItemContent>
                    myFlix
                </StyledFooterItemContent>
            </StyledFooterItem>
            <StyledFooterItem
                flexDirection='column'
            >
                <StyledFooterItemHeading>
                    Explore
                </StyledFooterItemHeading>
                <StyledFooterItemContent>
                    About
                </StyledFooterItemContent>
                <StyledFooterItemContent>
                    Career
                </StyledFooterItemContent>
                <StyledFooterItemContent>
                    Terms
                </StyledFooterItemContent>
                <StyledFooterItemContent>
                    FAQ
                </StyledFooterItemContent>
            </StyledFooterItem>
            <StyledFooterItem
                flexDirection='column'
            >
                <StyledFooterItemHeading>
                    Connect
                </StyledFooterItemHeading>
                <StyledFooterItemContent>
                    Facebook
                </StyledFooterItemContent>
                <StyledFooterItemContent>
                    Twitter
                </StyledFooterItemContent>
                <StyledFooterItemContent>
                    Instagram
                </StyledFooterItemContent>
            </StyledFooterItem>
        </Container>
    </StyledFooter>

export default Footer