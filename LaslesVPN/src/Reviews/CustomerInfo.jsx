import React from "react";
import './reviews.scss';

export default function Info (props) {
     return (
          <div className="review">
               <div className="review__customer">
                    <div className="review__customer-info">
                         <div className="review__customer-img">
                              <img src={props.img} alt="customer photo" />
                         </div>
                         <div className="review__customer-desc">
                              <span className="review__customer-name">{props.name}</span>
                              <span className="review__customer-country">{props.country}</span>
                         </div>                    
                    </div>
                    <div className="review__customer-star">
                         <span>{props.star}</span>
                              <i className="icon-star"></i>
                    </div>
               </div>
               <div className="review__text-holder">
                    <p>{props.quote}</p>
               </div>
          </div>
     )
};