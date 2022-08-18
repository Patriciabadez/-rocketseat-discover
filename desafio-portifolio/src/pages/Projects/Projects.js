import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls';
import {ComponentProject } from './styled';

const Projects = () => {
    const [repositories, setRepositories] = useState([])


    useEffect(() => {
        fetch(`${BASE_URL}/repos`)
            .then((response) => response.json())
            .then(data => setRepositories(data))

    }, [])

    return (

        <ComponentProject>
           <h1><img src= "./assets/foto-gitb.png"></img> Repositórios do Github</h1>
           
            {repositories.map(repository => {
                return (
                    <>
                    
                      <h2>{repository.name}</h2>
                        <p>{repository.description}</p>
                        <p><a href={repository.html_url} target='_blanck'>Saiba Mais</a></p>
                    </>
                )
            })}
        </ComponentProject>


    );
}

export default Projects