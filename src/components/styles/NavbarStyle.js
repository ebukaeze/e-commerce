import styled from "styled-components"

export const Container = styled.div`
   width: 100%;
   height: 80px;
   background-color: #fff;
   
`
export const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`
export const Language = styled.span`
 font-size: 14;
 font-weight: semi-bold;
 cursor: pointer;
`
export const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
padding-left: 6px;
margin-left: 25px;

`
export const Input = styled.input`
 border: none;
`

export const Center = styled.div`
 flex:1;
 display: flex;
 align-items: center;
 justify-content: center;
`
export const Logo = styled.h1`
 text-align: center;
 font-weight: bold;
 color: #fe3f3f;
`

export const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`
export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  cursor: pointer;
`