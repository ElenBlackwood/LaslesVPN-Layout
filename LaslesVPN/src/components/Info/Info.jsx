import React from 'react'
import './info.scss'

export default function Info() {
  return (
    <section className="info">
        <div className="container">
          <div className="block">
            <div className="block__content">
              <div className="block__icon">
                <i className="icon-user"><span className="path1"></span><span className="path2"></span></i>
              </div>
              <div className="block__text-holder">
                <span className="block__text-amount">90+</span>
                <span className="block__text">Users</span>
              </div>
            </div>  
            <div className="block__content">
              <div className="block__icon">
              <i className="icon-location"><span className="path1"></span><span className="path2"></span></i>
              </div>
              <div className="block__text-holder">
                <span className="block__text-amount">30+</span>
                <span className="block__text">Locations</span>
              </div>
            </div>  
            <div className="block__content">
              <div className="block__icon">
              <i className="icon-server"><span className="path1"></span><span className="path2"></span></i>
              </div>
              <div className="block__text-holder">
                <span className="block__text-amount">50+</span>
                <span className="block__text">Servers</span>
              </div>
            </div>            
        </div>            
        </div>
    </section>
  )
}
