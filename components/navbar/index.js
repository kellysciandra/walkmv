import { MenuItem } from "@material-ui/core";
import Link from "next/link";
import { NavContainer, HamburgerContainer } from "./navbar.styles"
import React, { useState } from 'react'
import MenuButton from "./menuButton";
import Menu from "./menu";
import { useRouter } from 'next/router'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter()

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (val) => {
        setMenuOpen(false)
         router.push(`/${val}`)
    };

    const menu = ['About','Services','Contact']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem
          style={{fontSize: '2em',  fontFamily:`'Roboto Mono', monospace`}} 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={ ()=> {handleLinkClick(val)} }>{val}</MenuItem>
        )});

    return <>
        <NavContainer>
            <HamburgerContainer>
                <MenuButton open={menuOpen} onClick={ () => handleMenuClick()} color='white'/>
            </HamburgerContainer>
            <Menu open={menuOpen}>
                {menuItems} 
            </Menu>
        </NavContainer>
    </>
};

export default Navbar;