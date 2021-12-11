import styled from "styled-components";


export const Container = styled.div`
width: 90%;
max-width: 1600px;
margin: 0 auto;
position: relative;
`

export const Wrapper = styled.div`
display: flex;
width: 100%;
gap: 20px;
align-items: center;
flex-wrap: wrap;


`
export const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
left: 0;
top: 0;
z-index: 3;
position: absolute;
background: rgba(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;


`
export const Content = styled.div`
flex: 1;
min-width: 280px;
height: 350px;
margin: 5px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info} {
    opacity: 1;
}
`
export const Circle = styled.div`

`
export const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
margin-left: 10px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: .2s ease;

&:hover{
    background-color: #c7c8c5;
    transform: scale(1.1);
}

`

export const Image = styled.img`
  width: 75%;

  object-fit: contain;
  object-position: center center;
`


export const Title = styled.h1`
font-weight: 500;
`