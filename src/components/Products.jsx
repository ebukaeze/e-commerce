import React from 'react';
import { popularProducts } from '../data';
import Product from './Product';


import { Container, Wrapper, Title } from './styles/ProductStyle'

const Products = ({simple}) => {
    
    return (
       <Container>
           { !simple &&
           <Title fill="black">Popular Products </Title>
            }
            <Wrapper>
                {
                    popularProducts.map((item) => (
                <Product item={item}/>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Products
