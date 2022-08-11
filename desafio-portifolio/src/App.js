import React from 'react'
import Footer from './components/Footer/Footer';
import Home from './Home/Home'
import { ContainerApp } from './styled';
import './index.css'

const App = () => {
  return (
    <ContainerApp>
      <Home />
      <Footer />
    </ContainerApp>
  );
}

export default App;
