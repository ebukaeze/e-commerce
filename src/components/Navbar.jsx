import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';


import { Container, Wrapper, Left, Center, Right, Language, SearchContainer, Input, Logo, MenuItems } from './styles/NavbarStyle';


const Navbar = ({simple}) => {

    return (
        <Container>
        <Wrapper >
            <Left>
               <Logo> Fidela </Logo>
            </Left>
            <Center>
               {!simple && (    
                        <>
              <Language>EN</Language>
               <SearchContainer>
                   <Input placeholder='Search'/>
                   <Search style={{ color: "grey", fontSize: "24px", fontWeight: "800", cursor: "pointer"}}/>
               </SearchContainer>
                       </>
                       )}
            </Center>
            <Right>
             <MenuItems>
             REGISTER
             </MenuItems>
             <MenuItems> LOGIN</MenuItems>
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
