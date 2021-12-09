import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';


import { Container, Wrapper, Left, Center, Right, Language, SearchContainer, Input, Logo, MenuItems } from './styles/NavbarStyle';

const Navbar = () => {
    return (
        <Container>
        <Wrapper >
            <Left>
               <Language>EN</Language>
               <SearchContainer>
                   <Input />
                   <Search style={{ color: "grey", fontSize: "18px"}}/>
               </SearchContainer>
            </Left>
            <Center>
                <Logo> Fidela </Logo>

            </Center>
            <Right>
             <MenuItems>
             REGISTER
             </MenuItems>
             <MenuItems> SIGN IN</MenuItems>
             <MenuItems> 
             <Badge badgeContent={4} color="primary">
                 <ShoppingCartOutlined />
             </Badge>
             </MenuItems>
            </Right>

        </Wrapper>
        </Container>
    )
}

export default Navbar
