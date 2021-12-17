import styled from "styled-components";
import { mobile } from "./Responsive";

export const Container = styled.div`
width: 100%;

`
export const Content = styled.div`
width: 90%;
max-width: 1640px;
margin: 0 auto;
`

export const Title = styled.h1`
margin: 20px;
`
export const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
export const Filter1 = styled.div`
display: flex;
margin: 20px;
align-items: center;

    ${mobile({flexDirection: "column", margin: "10px"})};

`
export const Filter2 = styled.div`
margin: 20px;
display: flex;
align-items: center;

${mobile({flexDirection: "column", margin: "10px"})};
`
export const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin: 0 13px;

`

export const Select = styled.select`
width: 140px;
padding: 4px 10px;
border: 1px solid black;
margin-right: 10px;

${mobile({ marginTop: "10px", width: "100px"})};
`

export const Option = styled.option`

`