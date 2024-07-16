import React from 'react';
import './reviews.scss';
import Carousel from './Carousel.jsx';

export default function Reviews() {
  return (
    <section className="reviews">
        <div className="container">
            <div className="reviews__desc-holder">
                <h2 className="subtitle">Trusted by Thousands of Happy Customer</h2>
                <span className="text-desc">See LaslesVPN everywhere to make it easier for you when you move locations.</span>
            </div>
            <Carousel />
                
        </div>
    </section>
  );
};
