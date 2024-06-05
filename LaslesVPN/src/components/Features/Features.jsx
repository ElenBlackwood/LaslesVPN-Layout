import React from 'react';
import './features.scss';
import featuresImg from '../../assets/img/features.jpg';

export default function Feature() {
  return (
    <section className="features">
        <div className="container flex-container">
            <div className="features__img">
                <img src={featuresImg} alt="features image" />
            </div>
            <div className="features__text-holder">
                <h2 className="subtitle">We Provide Many Features You Can Use</h2>
                <div className="text-desc">
                    <span>You can explore the features that we provide with fun and have their own functions each feature.</span>
                    <ul>
                        <li className="features__list-item">Powerfull online protection.</li>
                        <li className="features__list-item">Internet without borders.</li>
                        <li className="features__list-item">Supercharged VPN</li>
                        <li className="features__list-item">No specific time limits.</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
  )
}
