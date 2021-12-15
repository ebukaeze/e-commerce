import { Add, Remove } from '@material-ui/icons';
import React, {useState} from 'react';
import img3 from '../assets/images/prod3.png';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';

import { Container, Wrapper, ImgContainer, Image, InfoContainer, Title, Desc, Price, FilterContainer, Filter, FilterColor, FilterSize, FilterSizeOption, FilterTitle, AddContainer, AmountContainer, Amount, Button } from '../components/styles/ProductPageStyle';

const Product = () => {
    const [add, setAdd] = useState(1);

    if(add <= 0 ){
        setAdd(1);
        console.log(add);
    };
    console.log(add);
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                <Image src={img3} alt=""/>
                </ImgContainer>
                <InfoContainer>
                    <Title> Luis Voulton Jacket</Title>
                    <Desc> Fidela deals on all kinds of outfits, we provide the best at an affordable price, there are a lot of varieties we have to offer.
</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                          <Filter>
                              <FilterTitle>Color</FilterTitle>
                              <FilterColor color="black"/>
                              <FilterColor color="darkblue"/>
                              <FilterColor color="grey"/>
                          </Filter>
                          <Filter>
                              <FilterTitle>Size</FilterTitle>
                              <FilterSize>
                                  <FilterSizeOption>XS</FilterSizeOption>
                                  <FilterSizeOption>SM</FilterSizeOption>
                                  <FilterSizeOption>M</FilterSizeOption>
                                  <FilterSizeOption>L</FilterSizeOption>
                                  <FilterSizeOption>XL</FilterSizeOption>
                              </FilterSize>
                          </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>setAdd((current) => current - 1)}/>
                            <Amount>{add}</Amount>
                            <Add onClick={()=>setAdd((current) => current + 1)}/>
                        </AmountContainer>
                        <Button> ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product
