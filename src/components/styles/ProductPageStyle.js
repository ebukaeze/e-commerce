import styled from "styled-components";


export const Container = styled.div`

`
export const Wrapper = styled.div`
padding: 50px;
display: flex;

`

export const ImgContainer = styled.div`
flex: 1;
background-color: #f5fbfd;

`
export const Image = styled.img`
width: 100%;
object-fit: cover;
`
export const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
`

export const Title = styled.h1`
font-weight: 200;
`
export const Desc = styled.p`
margin: 20px 0;
font-size: 20px;
line-height: 2rem;
`
export const Price = styled.h3`
font-size: 40px;
font-weight: 100;

`
export const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
`
export const Filter = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const FilterTitle = styled.p`
margin-right: 8px;
font-weight: 300;
font-size: 18px;
`
export const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${props => props.color};
margin-right: 8px;
cursor: pointer;
`
export const FilterSize = styled.select`
padding: 5px;
`
export const FilterSizeOption = styled.option`

`
export const AddContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;
margin-top: 25px;
cursor: pointer;

`
export const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
`
export const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid indigo;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

export const Button = styled.button`
 border: 2px solid indigo;
 cursor: pointer;
 align-items: center;
 padding: 15px;
 background-color: white;
 font-weight: 500;

 &:hover{
     background-color: #f8f4f4;
 }


`