
import React from 'react';
import { Imagem, Titulo, Precos } from './styles';

const Banner = () => (
  <Imagem>
    <div className="container">
      <Titulo>
        <h2>Template title</h2>
      </Titulo>
      <Precos>
        <p>R$ <span>100,00</span></p>
      </Precos>
    </div>
  </Imagem>
)

export default Banner;
