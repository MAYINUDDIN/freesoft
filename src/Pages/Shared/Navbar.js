import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className=''>
            <div class="navbar bg-primary drop-shadow  lg:px-16 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>   Home</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    About us
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>About</a></li>
                                    <li><a>Our Team</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    Products
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Web Development</a></li>
                                    <li><a>Android Apps</a></li>
                                    <li><a>ERP Software</a></li>
                                </ul>
                            </li>
                            <li><a>Services</a></li>
                            <li><a>News & Events</a></li>
                            <li className=''><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl text-white drop-shadow font-bold">FREE <span className='text-success'> SOFT</span>  </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-white p-0 text-md ">
                        <li className='font-bold'><NavLink to='/'> <FaHome />Home</NavLink></li>
                        <li tabindex="0">
                            <a>
                                About Us
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-1 px-6 bg-primary">
                                <li><a>About</a></li>
                                <li><a>Our Team</a></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <a>
                                Products
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2 bg-primary">
                                <li><a>Web Development</a></li>
                                <li><a>Android Apps</a></li>
                                <li><a>ERP Software</a></li>

                            </ul>
                        </li>
                        <li><a>Services</a></li>
                        <li><a>News & Events</a></li>
                        <li className='mr-20'><NavLink to='contact-us'>Contact us</NavLink></li>
                        <li className='mr-5 text-sm'><a> <BsFillTelephonePlusFill /> +8801999-089087 <br /></a></li>


                    </ul>
                </div>

                {/* <div class="navbar-end">
                    <a class="btn btn-secondary text-white">Login</a>
                </div> */}
            </div>
        </div>

    );
};

export default Navbar;