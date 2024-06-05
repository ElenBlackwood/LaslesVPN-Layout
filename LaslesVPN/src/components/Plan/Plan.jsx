import React from 'react';
import './plan.scss';
import planImg from '../../assets/img/plan.jpg'

export default function Plan() {
  return (
    <section className="plan">
        <div className="container">
            <div className="plan__desc-holder">
                <h2 className="subtitle">Choose Your Plan</h2>
                <div className="text-desc">
                    <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
            </div>
            <div className="plan__plans-holder">
                <div className="plan__select-plan">
                    <div className="plan__img">
                        <img src={planImg} alt="plan image" />
                    </div>
                    <span className="plan__packname">Free Plan</span>
                    <div className="plan__list">
                        <ul>
                            <li className="plan__benefit">Unlimited Bandwitch</li>
                            <li className="plan__benefit">Encrypted Connection</li>
                            <li className="plan__benefit">No Traffic Logs</li>
                            <li className="plan__benefit">Works on All Devices</li>
                        </ul>
                    </div>
                    <span className="plan__price">Free</span>
                    <button className="btn">Select</button>
                </div>
                <div className="plan__select-plan">
                    <div className="plan__img">
                        <img src={planImg} alt="plan image" />
                    </div>
                    <span className="plan__packname">Standard Plan</span>
                    <div className="plan__list">
                        <ul>
                            <li className="plan__benefit">Unlimited Bandwitch</li>
                            <li className="plan__benefit">Encrypted Connection</li>
                            <li className="plan__benefit">Yes Traffic Logs</li>
                            <li className="plan__benefit">Works on All Devices</li>
                            <li className="plan__benefit">Connect Anyware</li>
                        </ul>
                    </div>
                    <span className="plan__price">$9 / mo</span>
                    <button className="btn">Select</button>
                </div>
                <div className="plan__select-plan">
                    <div className="plan__img">
                        <img src={planImg} alt="plan image" />
                    </div>
                    <span className="plan__packname">Premium Plan</span>
                    <div className="plan__list">
                        <ul>
                        <li className="plan__benefit">Unlimited Bandwitch</li>
                            <li className="plan__benefit">Encrypted Connection</li>
                            <li className="plan__benefit">Yes Traffic Logs</li>
                            <li className="plan__benefit">Works on All Devices</li>
                            <li className="plan__benefit">Connect Anyware</li>
                            <li className="plan__benefit">Get New Features</li>
                        </ul>
                    </div>
                    <span className="plan__price">$12 / mo</span>
                    <button className="btn">Select</button>
                </div>

            </div>
            

        </div>
    </section>
  )
}
