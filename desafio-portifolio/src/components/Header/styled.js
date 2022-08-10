
import styled from 'styled-components'
// :root {
//     --body-bg-color: #22212C;
//     --text-color: #837E9F;
//     --bg-cards: #302F3D;
//     --bg-techs: #CB92B1;
//   }
export const ComponentHeader =styled.div`
font-family: 'Merriweather Sans', sans-serif;
background-color:#302F3D;

position: absolute;
left: 40px;
top:40px;
width: 348px;
height: 292px;
border-radius:25px;

img{
border-radius:50%;
box-sizing: border-box;
position: absolute;
width: 128px;
height: 128px;
left: 100px;
top: 30px;

/* background: url(fotopaty.jpeg); */
border: 2px solid #00FF00;
}
h1{
font-family: 'Merriweather Sans';
font-style: normal;
position: absolute;
left: 60px;
top: 170px;

font-weight: 700;
font-size: 23px;
line-height: 29px;
    
}
p{
font-family: 'Merriweather Sans';
font-style: normal;
position: absolute;
left: 110px;
top: 210px;

font-weight: 300;
font-size: 13px;
line-height: 16px;
}
`