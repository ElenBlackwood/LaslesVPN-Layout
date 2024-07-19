import React from "react";
import {review} from  '../dataReview.js';
import CustomerInfo from './CustomerInfo.jsx';

import { useState, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './reviews.scss';


function NextArrow(props) {
     const { onClick } = props;
     return (
         <button
            className={`slider-btn__arrow custom-next-arrow `}
            
            onClick={onClick}
        >
            <span className="slider-btn__arrow-right"></span>
        </button>
     );
 }
 
 function PrevArrow(props) {
     const { onClick } = props;
     return (
        <button
            className={`slider-btn__arrow custom-prev-arrow `}
            
            onClick={onClick}
        >
            <span className="slider-btn__arrow-left"></span>
        </button>
     );
 };

 
 export default function Carousel() {
     const sliderRef = useRef(null);

     const [activeSlide, setActiveSlide] = useState(0);
 
     const settings = {
         className: "center",
         centerMode: true,
         dots: false,
         infinite: true,
         slidesToShow: 2,
         speed: 500,
         arrows: false,
        beforeChange: (current, next) => setActiveSlide(next),
         
         
     };
 
     return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                {review.map((e, index) => (
                    <CustomerInfo 
                    key={e.id} 
                    name={e.name} 
                    country={e.country} 
                    star={e.star} 
                    quote={e.quote} 
                    img={e.img}
                    isActive={index === activeSlide} />
                ))}
            </Slider>
            <div className="slider-btn-holder">
                <div className="dots-holder">
                    {review.map((_, index) => (
                        <button
                            key={index}
                            className={`custom-dot ${activeSlide === index ? 'slick-active' : ''}`}
                            onClick={() => sliderRef.current.slickGoTo(index)}
                        />
                    ))}
                </div>
                <div className="arrows-holder">
                    <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
                    <NextArrow onClick={() => sliderRef.current.slickNext()} />
                </div>
             </div>
        </div>
     );
 }






// <div className="reviews__review-holder">
//                 <div className="review">
//                     <div className="review__customer">
//                         <div className="review__customer-info">
//                             <div className="review__customer-img">
//                                 <img src="" alt="customer photo" />
//                             </div>
//                             <div className="review__customer-desc">
//                                 <span className="review__customer-name">Name</span>
//                                 <span className="review__customer-country">Country</span>
//                             </div>                    
//                         </div>
//                         <div className="review__customer-star">
//                                 <span>4.5</span>
//                                 <i class="icon-star"></i>
//                         </div>
//                     </div>
//                     <div className="review__text-holder">
//                         <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="reviews__btn-holder">
//                 <div className="reviews__spot-holder">
//                     <button className="reviews__spot reviews__spot_active"></button>
//                     <button className="reviews__spot"></button>
//                     <button className="reviews__spot"></button>
//                 </div>
//                 <div className="reviews__arrows-holder">
//                     <button className="reviews__arrow reviews__arrow_active"><span className="reviews__arrow-left"></span></button>
//                     <button className="reviews__arrow"><span className="reviews__arrow-right"></span></button>
//                 </div>
//             </div> 



