import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="title-text">
        <span className="footer__title">
          teste o premium de graça
        </span>
        <span className="footer__text">
          Inscreva para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
        </span>
      </div>

      <button className="footer__button">Inscreva-se grátis</button>
    </footer>
  )
}

export default Footer;