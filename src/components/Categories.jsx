import React from 'react';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';
import { Wrapper, Container, Title } from './styles/CategoryStyle';
const Categories = () => {
    return (
        <Container>
          <Title fill="black">Inspiration for your next outfit </Title>
            <Wrapper>
                {categories.map((item) =>(
                  <CategoriesItem item={item}/>
                ))}
                
            </Wrapper>
        </Container>
    )
}

export default Categories
