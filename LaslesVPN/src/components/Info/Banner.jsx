import React from 'react';
import './info.scss'

export default function Banner() {
  return (
    <section className="info">
            <div className="block">
                <div className="block__desc">
                    <h2 className="subtitle">Subscribe Now for Get Special Features!</h2>
                    <span className="text-desc">Let's subscribe with us and find the fun.</span>
                </div>
                <button className="bg-btn">Subscribe Now</button>
            </div>
    </section>
  )
}
