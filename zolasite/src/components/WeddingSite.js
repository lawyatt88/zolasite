import React, { Component } from 'react'

class WeddingSite extends Component {
  render() {
    return (
      <div>
        <nav className="top-nav">
          <div className="container-fluid d-flex justify-content-between">
            <div className="left">
              <p className="nav-meta">March 30, 2017</p> 
              <p className="nav-meta">Memphis</p>
            </div>
            <div className="right">
              <h2 className="nav-meta">#cynthiaandwilliam</h2>
            </div>
          </div>
          <div>
          <h2 className="header">Cynthia & William</h2>
          </div>
        </nav>
        <div className="banner d-flex d-row align-items-center justify-content-center">
          <div className="col-8">
            <h1 className="banner-text title">We're getting married!</h1>
          </div>
        </div>
        <div className="detail d-flex align-items-center justify-content-center">
          <div className="detail-title col-6">
            <div className="feather">
              <img src="/Palmier1-White.png" />
            </div>
            <h2 className="header">How We Met</h2>
            <p className="date">3.05.17</p>
          </div>
          <div className="vert-div" />
          <div className="detail-text col-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, vitae sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, e!citur nec enim in, pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non ultrices arcu elit sed enim.
            </p>
          </div>
        </div>
        <div className="detail d-flex align-items-center justify-content-center">
          <div className="detail-title col-6">
            <div className="feather">
              <img src="/Palmier1-White.png" />
            </div>
            <h2 className="header">The Proposal</h2>
            <p className="date">3.05.17</p>
          </div>
          <div className="vert-div" />
          <div className="detail-text col-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, vitae sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, e!citur nec enim in, pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non ultrices arcu elit sed enim.
            </p>
          </div>
        </div>
      </div>  
    )
  }
}

export default WeddingSite