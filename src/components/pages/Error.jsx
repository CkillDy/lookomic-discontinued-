// Error.js
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='container-error'>
      <img draggable="false" src="../erro-404.png" width={200} alt="Error" />
      <h2>Oops! Parece que você se perdeu...</h2>
      <p>
        A página que você está procurando não foi encontrada.
      </p>
      <p>
        Volte para a <button><Link to="/">página inicial</Link></button> e explore os incríveis mangás HQ nacionais do Lookomic.
      </p>
    </div>
  );
};

export default Error;
