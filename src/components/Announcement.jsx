import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color: #ff8ec4;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
         Super Deals! Free Shipping on Orders over $50
        </Container>
    )
}

export default Announcement
