import React, { useEffect, useRef, useState } from 'react';
import  {slideItem} from '../data';
import { ArrowBackIosRounded, ArrowForwardIosRounded, Slideshow } from '@material-ui/icons';


import { Container, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Slide, SlideContainer, Title, Button, Desc } from './styles/SliderStyle';

const Slider = () => {
    const [current, setCurrent ] = useState(0);
    const length = slideItem.length;
    const timeout = useRef(null);

   useEffect(() => {
        const nextSlide = () => {
        setCurrent(current => (current === length - 1 ? 0 : current + 1 ));
    }
      timeout.current = setTimeout(nextSlide, 3000);

      return function() {
          if(timeout.current){
             clearTimeout(timeout.current);
          }
      }
   }, [current, length])

  if(!Array.isArray(slideItem) || slideItem.length <= 0) {
    return null;
  }  
    const nextSlide = () => {
        if(timeout.current){
             clearTimeout(timeout.current);
          }
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        if(timeout.current){
             clearTimeout(timeout.current);
          }
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    return (
        <Container>
            <Arrow direction="left" onClick={prevSlide}>
                <ArrowBackIosRounded style={{fontSize: "4rem"}} />
            </Arrow>
            <Wrapper>
                { slideItem.map((item, index) => (
                <Slide  key={index}>
                    {index === current && 
                    <SlideContainer>
                <ImgContainer  bg={item.bg}>
                <Image src={item.image} alt="" />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button btn={item.bg}>{item.btn} <span><ArrowForwardIosRounded/></span></Button>
                </InfoContainer>
                </SlideContainer>
                 }
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={nextSlide}>
                <ArrowForwardIosRounded style={{fontSize: "4rem"}}/>
            </Arrow>
        </Container>
    )
}

export default Slider
