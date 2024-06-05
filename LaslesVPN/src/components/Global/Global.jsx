import React from 'react';
import './global.scss';
import globalImg from '../../assets/img/map.jpg';
import sponsorImg from '../../assets/img/sponsored.jpg';

export default function Global() {
  return (
    <section className="global">
        <div className="container">
            <div className="global__desc-holder">
                <h2 className="subtitle">Huge Global Network of Fast VPN</h2>
                <span className="text-desc">See LaslesVPN everywhere to make it easier for you when you move locations.</span>
            </div>
            <div className="global__img">
                <img src={globalImg} alt="global image" />
            </div>
            <div className="global__img">
                <img src={sponsorImg} alt="image of sponsors" />
            </div>

        </div>
    </section>
  )
}
