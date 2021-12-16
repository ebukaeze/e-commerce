import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100vh;


`
export const Wrapper = styled.div`
width: 90%;
max-width: 1640px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Title = styled.h1`
font-size: 24px;
font-weight: 600;
margin-bottom: 28px;
`

export const Form = styled.form`
width: 25%;
height: max-content;
background-color: #f2f5f5;
box-shadow: 1px 2px 8px -2px rgba(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px 10px;


`

export const Input = styled.input`
border: none;
border-bottom: 1px solid #776f7e;
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);
background-color: #f6f6f6;
height: 30px;
width: 90%;
padding: 4px 4px;
margin-top: 25px;



&:focus{
    outline: none;
    border-bottom: 2px solid indigo;
    
}
`
export const Button = styled.button`
  width: 90%;
  padding: 8px 4px;
  cursor: pointer;
  margin-top: 25px;
  background-color: #f36464;
  color: #fff;
  border: none;
  font-weight: 600;

  &:hover{
        background-color: #d33333;

  }

`
export const Agreement = styled.p`
font-size: 12px;
color: #757575;
margin-top: 25px;
`
export const Em = styled.em`
color: #4b4b4b;
`