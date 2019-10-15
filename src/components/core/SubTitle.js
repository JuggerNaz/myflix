import React from 'react'
import { Heading } from 'rebass'

const SubTitle = props =>
    <Heading
        {...props}
    >
        {props.text}
    </Heading>

export default SubTitle