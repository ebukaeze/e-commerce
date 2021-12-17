import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import prod3 from '../assets/images/prod3.png';
import prod4 from '../assets/images/prod4.png';


import { Container, Wrapper, Content, Title, Top, TopButton, TopTexts, TopText, Bottom, Info, 
         Product, ProductDetails, Image, Details, ProductName, ProductId, ProductColor, ProductSize, PriceDetail, 
         ProductAmountContainer, ProductAmount, ProductPrice, Hr, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, SummaryButton} from '../components/styles/CartStyle';

import NewsLetter from '../components/NewsLetter';
import { Add, Remove } from '@material-ui/icons';
const Cart = () => {
    return (
        <Container>
            <Navbar simple/>
            <Announcement />
            <Wrapper>
             <Content>
             <Title>YOUR BAG</Title>
             <Top>
                 <TopButton color="transparent">CONTINUE SHOPPING</TopButton>
                 <TopTexts>
                     <TopText>Shopping Bag(3)</TopText>
                     <TopText>Wishlist(0)</TopText>
                 </TopTexts>
                 <TopButton color="black"> CHECKOUT NOW</TopButton>
             </Top>
             <Bottom>
                 <Info>
                     <Product>
                         <ProductDetails>
                             <Image src={prod3} alt=""/>
                             <Details>
                                 <ProductName><b>Product:</b> THUG LIFE HAT</ProductName>
                                 <ProductId><b>ID:</b> 9283993920</ProductId>
                                 <ProductColor color="black"/> 
                               <ProductSize><b>Size:</b> 37.5</ProductSize>
                             </Details>
                         </ProductDetails>
                         <PriceDetail>
                             <ProductAmountContainer>
                                 <Add />
                                 <ProductAmount>1</ProductAmount>
                                 <Remove/>
                             </ProductAmountContainer>
                             <ProductPrice>$ 30</ProductPrice>
                         </PriceDetail>
                     </Product>
                     <Hr />
                     <Product>
                         <ProductDetails>
                             <Image src={prod4} alt=""/>
                             <Details>
                                 <ProductName><b>Product:</b> iPhone 13 Pro Max</ProductName>
                                 <ProductId><b>ID:</b> 9283993920</ProductId>
                                 <ProductColor color="blue"/> 
                               <ProductSize><b>Size:</b> 4 inch</ProductSize>
                             </Details>
                         </ProductDetails>
                         <PriceDetail>
                             <ProductAmountContainer>
                                 <Add />
                                 <ProductAmount>2</ProductAmount>
                                 <Remove/>
                             </ProductAmountContainer>
                             <ProductPrice>$ 1230</ProductPrice>
                         </PriceDetail>
                     </Product>
                 </Info>
                 <Summary>
                     <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                     <SummaryItem>
                         <SummaryItemText>Subtotal</SummaryItemText>
                         <SummaryItemPrice>$ 80</SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem>
                         <SummaryItemText>Estimated Shipping</SummaryItemText>
                         <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem>
                         <SummaryItemText>Shipping Discount</SummaryItemText>
                         <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem>
                         <SummaryItemText type="total">Total</SummaryItemText>
                         <SummaryItemPrice>$ 80</SummaryItemPrice>
                     </SummaryItem>
                     <SummaryButton>CHECKOUT NOW</SummaryButton>
                 </Summary>
             </Bottom>
             </Content>
            </Wrapper>
            <NewsLetter />
            <Footer/>
        </Container>
    )
}

export default Cart
