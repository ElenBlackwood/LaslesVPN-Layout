import React from 'react';
import './footer.scss';
import Logo from '../../assets/img/logo.png';


export default function Footer() {
  return (
    <footer className="footer">
        <div className="container flex-container">
            <div className="logo-holder">
                <div className="logo-holder__logo">
                    <img className="logo" src={Logo} alt="logo image" />
                </div>
                <div className="logo-holder__desc text-desc">
                    <p><span className="text-desc_bold">LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                </div>
                <div className="logo-holder__social-icons">
                    <i className="icon-facebook"><span className="path1"></span><span className="path2"></span></i>
                    <i className="icon-twitter"><span className="path1"></span><span className="path2"></span></i>
                    <i className="icon-instagram"><span className="path1"></span><span className="path2"></span></i>
                </div>
                <span className="logo-holder__copy">
                    ©2020LaslesVPN
                </span>
            </div>
            <nav className="nav">
                <ul>
                    <li className="nav__list-item nav__list-item_bold ">Product</li>
                    <li className="nav__list-item "><a href="!#">Download</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Pricing</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Locations</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Server</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Countries</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Blog</a></li>
                </ul>
                <ul>
                    <li className="nav__list-item nav__list-item_bold ">Engage</li>
                    <li className="nav__list-item "><a href="!#" className="link">LaslesVPN ? </a></li>
                    <li className="nav__list-item "><a href="!#" className="link">FAQ</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Tutorials</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">About Us</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Privacy Policy</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Terms of Service</a></li>
                </ul>
                <ul>
                    <li className="nav__list-item nav__list-item_bold ">Earn Money</li>
                    <li className="nav__list-item "><a href="!#" className="link">Affiliate</a></li>
                    <li className="nav__list-item "><a href="!#" className="link">Become Partner</a></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}
