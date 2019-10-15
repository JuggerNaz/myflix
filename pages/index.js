import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Text, Card, Image } from 'rebass'
import { QuoteAltLeft, QuoteAltRight } from 'styled-icons/boxicons-solid/'
import fetch from 'isomorphic-unfetch'
import Slider from 'react-slick'
 
//local
import Home from '../src/components/layout/Home'
import Header from '../src/components/layout/Header'
import { Container, Row } from '../src/components/layout'
import Title from '../src/components/core/Title'
import RoundButton from '../src/components/core/RoundButton'
import RegisterForm from '../src/components/layout/RegisterForm'
import Footer from '../src/components/layout/Footer'
import SubTitle from '../src/components/core/SubTitle'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../src/static/index.css'

const StyledBox = styled(Flex)`
    height: 250px;
    width: 250px;
    background-image: -webkit-linear-gradient(top, transparent 0%, rgba(0,0,0,.05) 100%);
	-webkit-transition: 1s all;
	background-image: -webkit-linear-gradient(left top, 
		transparent 0%, transparent 25%, 
		rgba(0,0,0,.15) 25%, rgba(0,0,0,.15) 50%, 
		transparent 50%, transparent 75%, 
		rgba(0,0,0,.15) 75%);
    background-size: 4px 4px;
    text-align: center;
    position: relative;
`

const StandardIconStyle = `
    height: 35px;
    width: 35px;
    color: #480E87;
    position: absolute;
    z-index: 1;
`

const IconQuoteLeft = styled(QuoteAltLeft)`
    ${StandardIconStyle}
    top: 0px;
    left: 0px;
`

const IconQuoteRight = styled(QuoteAltRight)`
    ${StandardIconStyle}
    bottom: 0px;
    right: 0px;
`

const QuoteAvatar = styled(Flex)`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #480E87;
    border: 2px solid #fff;
    position: absolute;
    left: 20px;
    bottom: -20px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    color: #fff;
`

const ShowContainer = styled(Container)`
    border-top: 2px solid #480E87;
    border-bottom: 2px solid #480E87;
    border-radius: 5px;
    background-color: #ececec;
`

const Index = props => {
    console.log(props.shows)
    function getImageUrl(images){
        const imageUrl = images.filter(image => { return image.type == 'POSTER' })
        return imageUrl[0].url
    }
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 5
    }
    return(
        <Home>
            <Header />
           
            {
                props.shows.map(show =>(
                    <Row
                        my={2}
                    >
                        <ShowContainer
                            flexDirection='column'
                            p={2}
                        >
                            <Flex
                                width={[1]}
                            >
                                <SubTitle
                                    as='h2'
                                    fontFamily='nunito'
                                    fontSize='18px'
                                    color='#480E87'
                                    text={show.row_name}
                                />
                            </Flex>
                            <Flex
                                width={['95%']}
                                height={[250]}
                                px={2}
                                flexDirection='column'
                                justifyContent='center'
                                mx={'auto'}
                            >
                                <Slider {...settings}>
                                    {
                                        show.data.map(movie => (
                                            // <Flex>
                                            //     <Card width={[150, 250]} mx={1}>
                                            //         <Image src={getImageUrl(movie.images)} />
                                            //         <Text>
                                            //             {movie.title}
                                            //         </Text>
                                            //     </Card>
                                            // </Flex>
                                            <Flex
                                                justifyContent='center'
                                            >
                                                <Image height={150} src={getImageUrl(movie.images)} />
                                                <Text
                                                    textAlign='center'
                                                >
                                                    {movie.title}
                                                </Text>
                                            </Flex>
                                            
                                        ))
                                    }
                                </Slider>
                            </Flex>
                        </ShowContainer>
                    </Row>
                ))

            }
            <Footer />
        </Home>
    )
}

Index.getInitialProps = async function(){
    const res = await fetch('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20')
    const data = await res.json()

    return {
        shows: data.data.map(entry => {
            if (entry.type == 'Multi-Title-Manual-Curation')
                return entry
        }).filter(show => {return show != null})
    }
}

export default Index