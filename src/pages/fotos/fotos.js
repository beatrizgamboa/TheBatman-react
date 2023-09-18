import React from 'react';
import './styles-fotos.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Cards from '../../components/cards';
import Info from '../../components/cards-info/info';

function Fotos() {
 
  return (
    <>
    <Header />
    <div id='banner'></div>
    <Cards />
    <Info />
    <Footer />
    </>
  );
}

export default Fotos;