import React from 'react';
import './hero.scss';
import HeroImg from '../../assets/img/hero-img.jpg';

export default function Hero() {
  return (
    <section className="hero-section">
        <div className="container flex-container">
            <div className="hero-section__text-holder">
                <h1 className="hero-section__title">Want anything to be easy with <span className="hero-section__title_bold">LaslesVPN</span>.</h1>
                <div className="hero-section__text">
                    <p>Provide a network for all your needs with ease and fun using <span className="hero-section__text_bold">LaslesVPN</span> discover interesting features from us.</p>
                </div>
                <button className="bg-btn">Get Started</button>

            </div>
            <div className="hero-section__img-holder">
                <img src={HeroImg} alt="hero image" />
            </div>
        </div>
    </section>
  );
};
