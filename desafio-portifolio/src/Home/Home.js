import React from'react'
import Contacts from '../components/Contacts/Contacts';
import Experiencias from '../components/Experiencias/Experiencias';
import Header from '../components/Header/Header';
import MyProjects from '../components/MyProjects/MyProjects';
import Tecnologias from '../components/Tecnologias/Tecnologias';
import Educacao from '../components/Educacao/Educacao';
import MyOnix from '../components/MyOnix/MyOnix';
import MyOnixi from '../components/MyOnixi/MyOnixi';
import { ContainerHome } from './Styled';
import RecentPost from '../components/RecentPost/RecentPost';
import Noticias from '../components/Noticias/Noticias';
import  Footer  from '../components/Footer/Footer';


const Home = () => {
    return(
        <ContainerHome>
        <Header/>
        <MyProjects/>
        <Contacts/>
        <Tecnologias/>
        <Experiencias/>
        <Educacao/>
        <MyOnix/>
        <MyOnixi/>
        <RecentPost/>
        <Noticias/>
        <Footer/>
        </ContainerHome>
        
    )
}
export default Home