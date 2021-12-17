import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 2rem;

@media screen and (max-width: 765px){
    text-align: center;
    margin-top: 1.5rem;
    height: 40vh;
}
`

export const Title = styled.h1`
font-size: 70px;

@media screen and (max-width: 765px){
    font-size: 38px;
    line-height: 40px;
}

`
export const Description = styled.p`
font-size: 24px;
font-weight: 300;
margin-bottom: 14px;

@media screen and (max-width: 765px){
    font-size: 20px;
    line-height: 28px;
}
`
export const InputContainer = styled.div`
width: 50%;
height: 50px;
background: white;
display: flex;
justify-content: space-between;

@media screen and (max-width: 765px){
    width: 90%;
    height: 38px;
}

`
export const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;

@media screen and (max-width: 765px){
    flex: 7;
}
`
export const Button = styled.button`
flex: 1;
border: none;
background-color: rgb(255, 34, 34);
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;

@media screen and (max-width: 765px){
    flex: 2;
}
`