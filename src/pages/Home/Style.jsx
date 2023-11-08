import styled from "styled-components";

export const Text =styled.p`
font-size:20px;
z-index:3;
margin-top:0px;
`
//이름
export const LinkBox=styled.div`
z-index:3;
width:60%;
height:40%;
background-color:rgba(255,255,255,0.5);
border:1px solid black;
border-radius: 10px 0 0 10px;
display:flex;
align-items:center;
justify-content:center;
font-size:130%;
color:rgba(0,0,0,0.5);
`

export const CopyBtn=styled.button`
z-index:3;
background-color:rgb(28,89,73);
width:20%;
height:41.5%;
color:white;
font-size:130%;
border:none;
border:1px solid black;
text-align:center;
border-radius: 0 10px 10px 0;
font-family: 'SUITE';
`

export const ClickBox=styled.div`
z-index:3;
margin-left:auto;
margin-right:auto;
background-image:url("/Img/clickPresent.png");
background-size:100% 100%;
width:65%;
height:90%;
position:relative;
left:4%;
top:15%;
`

export const PresentComponent=styled.div`
z-index:3;
width:100px;
height:100px;
background-image:url("/Img/present.png");
background-size:100% 100%;
` 
export const FlexBox=styled.div`
z-index:4;
width:100%;
height:${props => props.height};
display:flex;
justify-content:center;
background-color:${props => props.color};
` 