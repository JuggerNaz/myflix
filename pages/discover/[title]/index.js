import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Card, Box, Image, Heading } from 'rebass'
import fetch from 'isomorphic-unfetch'

//local
import Home from '../../../src/components/layout/Home'
import Header from '../../../src/components/layout/Header'
import { Container, Row } from '../../../src/components/layout'
import RoundButton from '../../../src/components/core/RoundButton'
import Footer from '../../../src/components/layout/Footer'
import SubTitle from '../../../src/components/core/SubTitle'

const ShowDetail = ({detail}) =>{
    const imageUrl = detail.images.filter(image => { return image.type == 'BACKGROUND' })
    const cast = detail.people.filter(cast => { return cast.role == 'CAST' }).map(name => name.name)
    return(
        <Home>
            <Header bgImage={imageUrl[0].url} title={detail.title} />
            <br />
            <Row mt={'200px'}>
                <Container>
                    {detail.description}
                </Container>
            </Row>
            <Row my={5}>
                <Container>
                    <Text
                        color='#480E87'
                        fontWeight='700'
                    >
                        Cast: {cast.join(', ')}
                    </Text>
                </Container>
            </Row>
            <Footer />
        </Home>
    )
}

ShowDetail.getInitialProps = async ({query}) => {
    const res = await fetch(`https://cdn-discover.hooq.tv/v1.2/discover/titles/${query.title}`)
    const data = await res.json()

    return {detail: data.data}
}

export default ShowDetail