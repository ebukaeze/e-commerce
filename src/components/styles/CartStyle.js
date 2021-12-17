import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100vh;
`

export const Wrapper = styled.div`
width: 90%;
max-width: 1620px;
margin: 0 auto;

`

export const Content = styled.div`
width: 100%;

`
export const Title = styled.h1`
font-weight: 300;
text-align: center;
`
export const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
background-color: ${props => props.color};
color: ${props => props.color === "black"? "white" : "black"};
border: ${props => props.color === "black" && "none"};
`
export const TopTexts = styled.div`

`
export const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`

export const Bottom = styled.div`
display: flex;
//align-items: center;
justify-content: space-between;
margin-top: 2rem;
`

export const Info = styled.div`
flex: 3;
`

export const Product = styled.div`
display: flex;
justify-content: space-between;

`
export const ProductDetails = styled.div`
flex: 2;
display: flex;

`
export const Image = styled.img`
width: 230px;

`
export const Details = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
justify-content: space-around;

`
export const ProductName = styled.span`


`
export const ProductId = styled.span`


`
export const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color}
`
export const ProductSize = styled.span`

`

export const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`
export const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
export const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;

`
export const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;

`
export const Hr = styled.hr`
background-color: #eee;
height: 1px;
border: none;
`

export const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
export const SummaryTitle = styled.h1`
 font-size: 24px;
 font-weight: 400;
`
export const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;

`
export const SummaryItemText = styled.div`
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};

`
export const SummaryItemPrice = styled.div`

`
export const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


