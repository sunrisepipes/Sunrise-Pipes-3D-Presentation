import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

export const Header = () => {
  return (
    <header className="flex items-center justify-around px-1 md:px-6 h-14 bg-[#1e1e1e]">
      <Link className="flex items-center gap-2  hover:underline underline-offset-4 no-underline" to="/">
        <img src="  src\assets\main-logo.png" alt="Logo.img" className='w-10'/>

        <span className="text-lg font-extrabold text-white font-sans ">Khushal Grover</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <NavLink to="/features">Home</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};
    
