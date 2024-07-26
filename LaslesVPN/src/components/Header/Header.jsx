import React from 'react';
import './header.scss';
import Logo from '../../assets/img/logo.jpg';

export default function Header() {
    return (
        <header className="header">
            <div className="container flex-container">
                <div className="header__logo">
                    <img className="logo" src={Logo} alt="logo image" />
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="!#" className="link">About</a></li>
                        <li className="nav__item"><a href="!#" className="link">Features</a></li>
                        <li className="nav__item"><a href="!#" className="link">Pricing</a></li>
                        <li className="nav__item"><a href="!#" className="link">Testimonials</a></li>
                        <li className="nav__item"><a href="!#" className="link">Help</a></li>
                    </ul>
                </nav>
                <div className="header__btn-holder">
                    <button className="btn">Sign In</button>
                    <button className="btn">Sign Up</button>
                </div>
            </div>
        </header>
    );
};