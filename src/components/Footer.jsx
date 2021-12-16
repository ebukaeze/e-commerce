import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';

import { Container, Wrapper, Left, Center, Right, Logo, Title, Desc, SocialContainer, SocialIcon, TitleMd, List, ListItem, ContactItem } from './styles/FooterStyle';

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo><Title>Fidela</Title></Logo>
                    <Desc>
                        Fidela deals on all kinds of outfits, we provide the best at an affordable price, there are a lot of varieties we have to offer.
                         </Desc>
                         <SocialContainer>
                             <SocialIcon color="3B5999">
                                 <Facebook/>
                             </SocialIcon>
                             <SocialIcon color="E4405F">
                                <Instagram/>
                             </SocialIcon>
                             <SocialIcon color="55ACEE">
                                 <Twitter/>
                             </SocialIcon>
                             <SocialIcon color="E60023">
                                 <Pinterest/>
                             </SocialIcon>
                         </SocialContainer>
                </Left>
                <Center>
                    <TitleMd>Links</TitleMd>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <TitleMd>Contact</TitleMd>
                    <ContactItem> <Room style={{marginRight: "10px"}}/>
                        33 prince {"&"} princess estate, Durumi, Area 1, Abuja
                        </ContactItem>
                        <ContactItem> <Phone style={{marginRight: "10px"}}/>+234 700 222 777</ContactItem>
                        <ContactItem><Mail style={{marginRight: "10px"}}/>help@fidelashop.com</ContactItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer
