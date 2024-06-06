import React from 'react';
import './reviews.scss';

export default function Reviews() {
  return (
    <section className="reviews">
        <div className="container">
            <div className="reviews__desc-holder">
                <h2 className="subtitle">Trusted by Thousands of Happy Customer</h2>
                <span className="text-desc">See LaslesVPN everywhere to make it easier for you when you move locations.</span>
            </div>
            <div className="reviews__review-holder">
                <div className="review">
                    <div className="review__customer">
                        <div className="review__customer-info">
                            <div className="review__customer-img">
                                <img src="" alt="customer photo" />
                            </div>
                            <div className="review__customer-desc">
                                <span className="review__customer-name">Name</span>
                                <span className="review__customer-country">Country</span>
                            </div>                    
                        </div>
                        <div className="review__customer-star">
                                <span>4.5</span>
                                <span>STAR ICON</span>
                        </div>
                    </div>
                    <div className="review__text-holder">
                        <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                    </div>
                </div>
            </div>
            <div className="reviews__btn-holder">
                <div className="reviews__spot-holder">
                    <button className="reviews__spot reviews__spot_active"></button>
                    <button className="reviews__spot"></button>
                    <button className="reviews__spot"></button>
                </div>
                <div className="reviews__arrows-holder">
                    <button className="reviews__arrow reviews__arrow_active"><span className="reviews__arrow-left"></span></button>
                    <button className="reviews__arrow"><span className="reviews__arrow-right"></span></button>
                </div>
            </div>            
        </div>
    </section>
  );
};
