import React from 'react'
import { ContainerMyOnixi, ImgStar, ImgGit, Ellipse } from './styled';

const MyOnixi = () => {
    return(
        <>
    <ContainerMyOnixi>
        
        <h2><img src='./assets/folder.svg'></img>my-onix</h2>
        <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
        <ImgStar>
            <p><img src='./assets/star.svg'></img>100</p>
        </ImgStar>
        <ImgGit>
            <p><img src='./assets/git-branch.svg'></img>100</p>
        </ImgGit>
        <Ellipse>
            <p>JavaScript</p>
        </Ellipse>
        
        </ContainerMyOnixi>
        </>
    )
}
export default MyOnixi