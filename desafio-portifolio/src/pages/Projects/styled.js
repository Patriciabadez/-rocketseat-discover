import styled from "styled-components";
import { backgroundFundo } from '../../constants/colors';

export const ComponentProject = styled.div`
font-family: 'Merriweather Sans', sans-serif;
background-color:#302F3D;
border-radius:20px;

position: absolute;
width: 950px;

left: 450px;
top:740px;


h1,h2,li,p {
font-family: 'Merriweather Sans';
font-style: normal;
line-height: 18px;
margin:0px 40px ;
}

h1,h2 {
font-weight: 700;
font-size: 20px;
margin-top: 20px;
}

li{
font-weight: 700;
font-size: 16px;
}

p{ 
font-weight: 400;
font-size: 14px;
}
img{
    width: 50px;
    border-radius: 50%;
    border:solid #CB92B1 3px;
    background-color:#CB92B1;
    margin:0px 20px ;
   
}
:hover{
    border: 1px solid #CB92B1;
    
}

`


