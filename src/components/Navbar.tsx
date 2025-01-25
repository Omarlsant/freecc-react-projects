import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  username: string;
}

const Navbar: React.FC<Props> = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
           React Practice Projects
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Inicio</Link>
           </li>
           {/* Aquí puedes agregar más enlaces de navegación */}
          {username ? (
            <li className="navbar-user">Welcome, {username}</li>
          ) : (
            <li><Link to="/login" className="navbar-login">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;