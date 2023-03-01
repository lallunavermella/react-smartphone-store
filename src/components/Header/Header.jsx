import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <div className="flex h-20 w-full bg-rose-100 justify-between p-4">
      <div className="text-xl">
        <Link to="/">
          <img src={logo} alt="Smartphone store" />
        </Link>
      </div>
      <div className="flex-end">Carrito</div>
    </div>
  );
}

export default Header;
