import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Text, Box, Image } from 'rebass'
import { QuoteAltLeft, QuoteAltRight } from 'styled-icons/boxicons-solid/'
import fetch from 'isomorphic-unfetch'
import Slider from 'react-slick'
import Link from 'next/link'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
 
//local
import Home from '../src/components/layout/Home'
import Header from '../src/components/layout/Header'
import { Container, Row } from '../src/components/layout'
import Footer from '../src/components/layout/Footer'
import SubTitle from '../src/components/core/SubTitle'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../src/static/index.css'

const StandardIconStyle = `
    height: 35px;
    width: 35px;
    color: #480E87;
    position: absolute;
    z-index: 1;
`

const ShowContainer = styled(Container)`
    border-top: 2px solid #480E87;
    border-bottom: 2px solid #480E87;
    border-radius: 5px;
`

const StyledBox = styled(Box)`
    -webkit-box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.5);
    border-radius: 5px;
    &:hover{
        cursor:pointer;
    }
`

const StyledImg = styled(Image)`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Index = ({ showsList, meta, alertOnBottom}) => {

    function getImageUrl(images){
        const imageUrl = images.filter(image => { return image.type == 'POSTER' })
        return imageUrl[0].url
    }

    const [shows, setShows] = useState(showsList)
    const [pagination, setPagination] = useState(meta)

    async function getNewData(page){
        const res = await fetch(`https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=${page}&perPage=20`)
        const data = await res.json()
 
        const showList = data.data.map(entry => {
            if (entry.type == 'Multi-Title-Manual-Curation')
                return entry
        }).filter(show => { return show != null })

        let currentPagination = pagination
        currentPagination.page = page
        
        setShows(shows.concat(showList))
        setPagination(currentPagination)
    }

    const handleOnDocumentBottom = useCallback(() => {
        console.log('I am at bottom! ' + Math.round(performance.now()))
        if(pagination.page < pagination.totalPages){
            getNewData(pagination.page + 1)
        }
        if (alertOnBottom) {
            alert('Bottom hit! Too slow? Reduce "debounce" value in props')
        }
    }, [alertOnBottom])

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    useBottomScrollListener(handleOnDocumentBottom)

    return(
        <Home>
            <Header />
            <br />
            {
                shows.map(show =>(
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
                                height={[300]}
                                px={2}
                                flexDirection='column'
                                justifyContent='center'
                                mx={'auto'}
                            >
                                <Slider {...settings}>
                                    {
                                        show.data.map(movie => (
                                            <Flex
                                                justifyContent='center'
                                                p={2}
                                            >
                                                <Link href={`/discover/${movie.id}`}>
                                                    <StyledBox
                                                        backgroundColor='white'
                                                        pb={2}
                                                    >
                                                        <StyledImg height={200} width={'100%'} src={getImageUrl(movie.images)} />
                                                        <Text
                                                            textAlign='center'
                                                            mt={2}
                                                            fontFamily='nunito'
                                                            fontSize='14px'
                                                            color='#480E87'
                                                        >
                                                            {movie.title}
                                                        </Text>
                                                    </StyledBox>
                                                </Link>
                                            </Flex>
                                        ))
                                    }
                                </Slider>
                            </Flex>
                        </ShowContainer>
                    </Row>
                ))

            }
            <Row
                mt={2}
            >
                <Container
                    flexDirection='row'
                    justifyContent='center'
                >
                    <Text>
                        {`Page: ${pagination.page}/${pagination.totalPages}`}
                    </Text>
                </Container>
            </Row>
            <Footer />
        </Home>
    )
}

Index.getInitialProps = async function(){
    const res = await fetch('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20')
    const data = await res.json()
    
    return {
        showsList: data.data.map(entry => {
            if (entry.type == 'Multi-Title-Manual-Curation')
                return entry
        }).filter(show => {return show != null}),
        meta: data.pagination
    }
}

export default Index