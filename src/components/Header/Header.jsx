import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { selectCartProductCount } from '../../redux';

function Header() {
  const cart = useSelector(selectCartProductCount);
  return (
    <div className="flex h-20 w-full bg-rose-100 justify-between p-4">
      <div className="text-xl">
        <Link to="/">
          <img src={logo} alt="Smartphone store" />
        </Link>
      </div>
      <div className="flex-end flex flex-col justify-start">
        <div className="pb-1">Carrito</div>
        <div className="text-center">{cart}</div>
      </div>
    </div>
  );
}

export default Header;
