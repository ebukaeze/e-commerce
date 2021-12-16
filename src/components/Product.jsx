import { FavoriteBorderOutlined, FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';

import { Content, Image, Info, Icon, Circle } from './styles/ProductStyle';

const Product = ({item}) => {
    return (
        <Content key={item.id}>
            <Circle />
         <Image src={item.image} alt=""/>
         <Info>
             <Icon>
        <ShoppingCartOutlined />
        </Icon>
          <Icon>
        <SearchOutlined />
        </Icon>
          <Icon>
        <FavoriteBorderOutlined />
        </Icon>
         </Info>
        </Content>
    )
}

export default Product
