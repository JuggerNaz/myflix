import React from 'react'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'

const Row = props =>
    <Flex
        width={1}
        justifyContent='center'
        px={2}
        {...props}
    />

export default Row