import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/tools">TOOLS</Link></li>
    <li><Link to="/businessSummary">BUSINESS SUMMARY</Link></li>
    <li><Link to="/purchase">PUCHASE</Link></li>
    <li><Link to="/blogs">blogs</Link></li>
    </>
    return (
        <div class="navbar bg-base-100  top-0 shadow-lg py-5 px-4">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {menuItems}
      </ul>
    </div>
    <a className=" btn bg-inherit normal-case text-4xl font-bold text-orange-600">CUMPUTER PARTS</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      
       
        {menuItems}
    </ul>
  </div>
  
</div>
    );
};

export default Header;