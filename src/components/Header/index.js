import React from 'react'
import Navbar from '../../Navigation/Navbar';
import { BiMenu } from 'react-icons/bi';
import { ImSearch } from "react-icons/im";
import { Colors } from '../colors';

import Logo from '../../assests/logo.png'
import './styles.css'

import { useState } from 'react';









const Header = ({ getdata }) => {





    const MenuClick = () => {
        // console.log("menuclilcked", setSideBar());

        getdata(true)

    }


    return (
        <div>


            <div className="HeaderSection" >



                <div className='LogoSection'>
                    <div className='Menu-icon' onClick={MenuClick}>   <BiMenu /></div>
                    <div className='logo-img'> <img src={Logo} /> </div>
                </div>



                <div className='Buttons'>
                    <div className='SearchClass'>  <ImSearch /> </div>

                    <button className='box-button box-button-1'>Log in</button>
                    <button className='box-button box-button-2'>Sign up</button>
                </div>

            </div>
        </div>
    )
}

export default Header;