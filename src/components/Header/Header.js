import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="navbar bg-[#0C6B7F] lg:px-12">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
          <li><Link to='/news'>News</Link></li>
          <li><Link to='/events'>Events</Link></li>
          <li><Link to='/photo'>Photo Albums</Link></li>
          <li><Link to='/sailors'>Sailors</Link></li>
          <li><Link to='login'>Login</Link></li>
        </ul>
        </div>
        {/* <p className='text-xl text-[#F6EE24]'>SAILING <small className='text-xs ml-1 text-[#F6EE24]'>NOW</small></p> */}
        {/* <a class="btn  normal-case text-xl text-[#F6EE24]"><p>SAILING</p> <small className='text-xs ml-1 text-[#F6EE24]'>NOW</small></a> */}
        
        <Link to="/" className='btn text-[#F6EE24] text-xl hover:text-yellow-400 '>SAILING  <small className='ml-1'>NOW</small> </Link>
    </div>
      <div class="navbar-center hidden lg:flex ">
   
        <ul class="menu menu-horizontal p-0 text-white hover:text-yellow-500">
          

        <li><Link className='hover:text-yellow-400' to='/news'>News</Link></li>
          <li><Link className='hover:text-yellow-400' to='/events'>Events</Link></li>
          <li><Link className='hover:text-yellow-400' to='/photo'>Photo Albums</Link></li>
          <li><Link className='hover:text-yellow-400' to='/sailors'>Sailors</Link></li>
          <li><Link className='hover:text-yellow-400' to='/dashboard'>Dashboard</Link></li>
          <li><Link className='hover:text-yellow-400' to='login'>Login</Link></li>
      </ul>
    </div>
   
  </div>
  );
};

export default Header;