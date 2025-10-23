import React from 'react';
import "./Error404.css"
const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }} className='div-error'>
      <h1>404 - Página no encontrada</h1>
      <p>La ruta a la que intentas acceder no existe.</p>
    </div>
  );
};

export default Error404;
