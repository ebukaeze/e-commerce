import React from 'react'

import { Container2, Image, Info, Title, Button } from './styles/CategoryStyle'

const CategoriesItem = ({item}) => {
    return (
        <Container2 bg={item.color}>
            <Image src={item.image} alt=""/>
            <Info>
              <Title > {item.title}</Title>
              <Button color={item.color}> Shop Now</Button>
            </Info>
        </Container2>
    )
}

export default CategoriesItem
