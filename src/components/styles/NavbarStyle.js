import styled from "styled-components";
import { mobile } from "./Responsive";

export const Container = styled.div`
   width: 100%;
   height: 80px;
   background-color: #fff;
   ${mobile({height: "60px"})};
`
export const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;

   ${mobile({padding: "10px 0px"})};

`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Language = styled.span`
 font-size: 14;
 font-weight: semi-bold;
 cursor: pointer;

    ${mobile({display: "none"})};

`
export const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
width: 60%;
display: flex;
height: 35px;
align-items: center;
padding: 5px;
margin-left: 25px;
border-radius: 10px;
box-shadow: 1px 0px 3px rgba(0,0,0,0.1);

   ${mobile({height: "25px", width: "70px", marginLeft: "0px"})};

`
export const Input = styled.input`
 border: none;
 flex:6;
 height: inherit;

 &:focus{
   outline: none;
 }

    ${mobile({width: "50px"})};

`

export const Center = styled.div`
 flex:1;
 display: flex;
 align-items: center;
 //justify-content: center;

 
`
export const Logo = styled.h1`
 font-weight: bold;
 color: #fe3f3f;

    ${mobile({fontSize: "20px", margin: "0px"})};

`

export const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 
  ${mobile({flex: "2", justifyContent: "center"})};
`
export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  cursor: pointer;

  ${mobile({fontSize: "14px", marginLeft: "10px"})};
`