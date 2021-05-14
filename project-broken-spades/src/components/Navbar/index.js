import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, NavButtonLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Project Broken Spades</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="who-we-are">Who We Are</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="what-we-do">What We Do</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sign-up">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavButtonLink to="/signin">Sign In</NavButtonLink>
                    </NavButton>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
