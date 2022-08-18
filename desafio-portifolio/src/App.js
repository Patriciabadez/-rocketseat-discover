import React from 'react'
import Home from './pages/Home/Home'
import { ContainerApp } from './styled';
import './index.css'
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <ContainerApp>
      <Home /> 
      <Projects/> 
    </ContainerApp>
  );
}
export default App;
