import React, { useEffect, useState } from 'react';
import './header.scss';
import Logo from '../../assets/img/logo.jpg';

export default function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    }

    useEffect(() => {
        if (burgerOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [burgerOpen]);



    return (
        <header className={`header ${burgerOpen ? 'active' : ''}`}>
            <div className="container flex-container">
                <div className="header__logo">
                    <img className="logo" src={Logo} alt="logo image" />
                </div>
                <nav className={`nav ${burgerOpen ? 'active' : ''}`}>
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
                <button className={`burger ${burgerOpen ? 'open' : ''}`} onClick={toggleBurger}>
                    <span className="burger-menu"></span>
                </button>
            </div>
        </header>
    );
};