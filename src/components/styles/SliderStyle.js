import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100vh;
max-height: 1100px;
display: flex;
position: relative;
overflow: hidden;
`
export const Arrow = styled.div`
width: max-content;
height: max-content;
background-color: #e0e0e02a;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
z-index: 1000;
padding: 8px;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
transition: .3s ease;
opacity: 0.5;

&:hover{
    background-color:#e4e4e42a;
    transform: scale(1.1);
    opacity: 1;
}
`
export const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
position: relative;
align-items: center;
justify-content: center;
overflow: hidden;

`
export const Slide = styled.div`
width: 100vw;
height: 100vh;
z-index: 1;




`
export const SlideContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: flex-end;
position: absolute;
top: 0;
left: 0;
transition: fadeIn .3s ease;

@keyframe fadeIn{

    0% {
        0pacity: 0.4;
    }
    50%{
        opacity: 0.8
    }
    100%{
        opacity: 1;
    }
}

`
export const ImgContainer = styled.div`
height: 100%;
width: 100%;
flex: 1;
display: flex;
align-items: center;
justify-content: center;

&::before{
    content: "";
    bottom: 0vh;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 2000;
    background-color: rgba(${props => props.bg}, 0.3);
    overflow: hidden;
    opacity: 0.5;
    background: linear-gradient(
        0deg, 
        rgba(${props => props.bg}, 0.2) 0%,
        rgba(${props => props.bg}, 0.4) 50%,
        rgba(${props => props.bg}, 0.8) 100%,


        );

}
`

export const Image = styled.img`
position: absolute;
display: flex;
top: 0;
left: 0;
height: 90%;
width: 100vw;
object-fit: cover;
z-index: 1;
object-position: center center;


`
export const InfoContainer = styled.div`
width: calc(100% - 100px);
display: flex;
max-width: 1600px;
flex-direction: column;
justify-content: end;
padding-left: 100px;
z-index: 4000;
transition: .3s ease;
`

export const Title = styled.h1`
font-size: clamp(1rem, 8vw, 3rem);
color: #fff;
text-transform: uppercase;
text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);


`
export const Desc = styled.p`
msrgin: 50px 0px;
font-fsmily: sans-serif;
font-size: 20px;
font-weight: 500;
letter-spacing: 2px;
color: #fff;
text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

`
export const Button = styled.button`
display: flex;
width: max-content;
padding: 10px;
font-size: 20px;
font-weight: 400;
background-color: rgb(${props => props.btn});
cursor: pointer;
border: 3px solid rgb(${props => props.btn});
color: #fff;
transition: .3s ease-out;

&:hover{
    background-color: transparent;
}
`