import styled from "styled-components"


export const Container = styled.div`
width: 90%;
max-width: 1600px;
margin: 0 auto;
position: relative;


`

export const Wrapper = styled.div`
width: 100%;
background-color: #f8fbff;
display: grid;
grid-template-columns: repeat(4, minmax(275px, 1fr));
gap: 15px;
padding: 10px 0;

&::-webkit-scrollbar{
  display: none;
}

@media screen and (max-width: 765px){
  overflow-x: scroll;
  grid-template-columns: repeat(5, minmax(175px, 1fr));

}
`
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
  background-color: rgb(${props => props.bg});
  border-radius: 10px;
  position: relative;

  &::before{
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(${props => props.bg}, 0.2);
    overflow: hidden;
    opacity: 0.8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    background: linear-gradient(
        0deg, 
        rgba(${props => props.bg}, 0.2) 0%,
        rgba(${props => props.bg}, 0.4) 50%,
        rgba(${props => props.bg}, 0.8) 100%,

     
        );
    

      }
}

    &:hover{
              background-color: transparent;
`
export const Image = styled.img`
object-fit: cover;
object-position: center center;
display: flex;
border-top-left-radius: 10px;
border-top-right-radius: 10px;


`
export const Info = styled.div`
padding: 5px 8px;
position: absolute;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
top: 0;
left: 0;
z-index: 1000;

`
export const Title = styled.h1`
color: ${props => props.fill === "black" ? "black" : "white"};
font-weight: ${props => props.fill === "black" ? "500" : "700"};
font-size: clamp(1rem, 6vw, 2rem);

`
export const Button = styled.button`
display: flex;
width: max-content;
padding: 10px;
font-size: 20px;
font-weight: 400;
border-radius: 10px;
background-color: rgb(${props => props.color});
cursor: pointer;
border: 3px solid rgb(${props => props.color});
color: #fff;
transition: .3s ease-out;

&:hover{
    background-color: transparent;
}

@media screen and(max-width: 765px){
  padding: 3px;
  font-size: 13px;
  font-weight: 300;
}
`