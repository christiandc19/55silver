import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo.png'
import {FiChevronDown } from "react-icons/fi";
import { AiOutlinePhone } from 'react-icons/ai';


import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }




    // const [isMenu2, setisMenu2] = useState(false);


    // const toggleClass2 = () => {
    //     setisMenu2(isMenu === false ? true : false);
    // };

    // let boxClass2 = ["main-menu menu-right menuq1"];
    // if(isMenu2) {
    //     boxClass2.push('menuq2');
    // }else{
    //     boxClass2.push('');
    // }

    // const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
      
    // const toggleSubmenu2 = () => {
    //   setMenuSubMenu2(isMenuSubMenu === false ? true : false);
    // };
    
    // let boxClassSubMenu2 = ["sub__menus"];
    // if(isMenuSubMenu2) {
    //     boxClassSubMenu2.push('sub__menus__Active');
    // }else {
    //     boxClassSubMenu2.push('');
    // }





    return (
        <div name='top' className='navbar'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} width="200px" height="80px" alt="55 Silver Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >location <FiChevronDown />
                        <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/north-citrus`}> North Citrus, Los Angeles </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/north-detroit`}> North Detroit, Los Angeles</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/huntington-beach`}> Huntington Beach </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/west-hollywood`}> West Hollywood </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/venice`}> Venice </NavLink> </li>
                        </ul>
                    </li>

                    <li><Link to='/sober-living'>SOBER LIVING</Link> </li>

                    <li><Link to='/mission'>ABOUT US</Link> </li>



                    {/* <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="/mission"> about us <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/mission`}> Our Mission</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/team`}> Our Team</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Testimonials </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> FAQ </NavLink> </li>

                        </ul>
                    </li> */}

                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>

                <div className='hide'>
                <p><a href="tel:3235792196"> CONTACT US <span> <AiOutlinePhone /></span></a></p>
                </div>


            </div>
        </div>
    )
}

export default Navbar
