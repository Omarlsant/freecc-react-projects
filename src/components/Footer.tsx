import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
          <ul className="footer-links">
           <li><a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a></li>
           <li><a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><Link to="/contact" className="footer-link">Contacto</Link></li>
         </ul>
        <p>© {new Date().getFullYear()} - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;