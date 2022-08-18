import styled from "styled-components";

export const ContainerMyOnixi = styled.div`
position: absolute;
width: 461px;
height: 186px;
left: 937px;
top: 155px;

font-family: 'Merriweather Sans', sans-serif;
background-color:#302F3D;
border-radius:20px;

h2{
font-family: 'Merriweather Sans';
font-style: normal;
position: absolute;
left: 40px;
top: 18px;
font-weight: 700;
font-size: 20px;
line-height: 20px;
}
img{
position: relative;
background-image:#837E9F;
right: 10px;
top:2px;
width: 20px;
height: 20px;
}

p{
font-family: 'Merriweather Sans';
font-style: normal;
position: absolute;
left: 30px;
top: 55px;

font-weight: 400;
font-size: 16px;
line-height: 20px;
}
:hover{
    border: 1px solid #CB92B1;
    
}
`
export const ImgStar = styled.div`
position:absolute;
top:50px;
left: 10px;
right: 10px;

`
export const ImgGit = styled.div`
position:absolute;
top:50px;
left:100px;
right: 10px;

`
export const Ellipse = styled.div`
box-sizing: border-box;

position: absolute;
border-radius:50%;
width: 15px;
height: 15px;
left: 350px;
top: 130px;

background: #E7DE79;
border: 2px solid #837E9F;
p{
    position:absolute;
    left: 18px;
    top: -20px;

}
:hover{
    border: 1px solid #CB92B1;
    
}
`