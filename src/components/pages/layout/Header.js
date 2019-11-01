import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Dropdown,Toggle,Menu,Item} from 'react-simple-dropdown'

const Header = props => {
  const { branding } = props;
  
  return (
    <nav className="navbar navbar-expand-sm navbar-dark  mb-3 py-0 "  style={{ background: 'blue' }}>
      <div className="container">
        <a href="/" className="navbar-brand">
          Sistema de Registro de Control de visitas
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                <i className="fas fa-home" /> Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contacts" className="nav-link">
                <i className="fas fa-user" /> Usuarios
              </Link>
            </li>
             
            <li className="nav-item">
              <Link to="/empresas" className="nav-link">
                <i className="fas fa-buisness" /> Empresas
              </Link>               
                      
            </li>
            <li className="nav-item">
              <Link to="/organismos" className="nav-link">
                <i className="fas fa-close" /> Organismos
              </Link>             
            </li>

            <li className="nav-item">
              <Link to="/estados" className="nav-link">
                <i className="fas fa-close" /> Estados
              </Link>             
            </li>
               
           
             <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-close" /> Cerrar Sesion
              </Link>  
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
