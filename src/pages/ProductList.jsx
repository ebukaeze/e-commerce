import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'

import { Container, Title, FilterContainer, Filter1, Filter2, Content, FilterText, Select, Option } from '../components/styles/ProductListStyle'
const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Content>
            <Title>Dresses</Title>
           <FilterContainer>
               <Filter1><FilterText>Filter Products</FilterText>
               <Select>
                   <Option disabled selected>
                       Color
                   </Option>
                   <Option>Black</Option>
                   <Option>Red</Option>
                   <Option>Blue</Option>
                   <Option>Yellow</Option>
                   <Option>Green</Option>
               </Select>
               <Select>
                   <Option disabled selected>
                       Size
                   </Option>
                   <Option>XS</Option>
                   <Option>S</Option>
                   <Option>M</Option>
                   <Option>L</Option>
                   <Option>XL</Option>
               </Select>
               </Filter1>
               <Filter2><FilterText>Sort Products</FilterText>
               <Select>
                   
                   <Option selected> Newest</Option>
                   <Option>Price (asc)</Option>
                   <Option>Price (desc)</Option>
                   
               </Select>
               </Filter2>
           </FilterContainer>
           <Products simple/>
           </Content>
           <NewsLetter />
           <Footer />
        </Container>
    )
}

export default ProductList
