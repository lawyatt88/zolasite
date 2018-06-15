import React, { Component } from 'react'

class WeddingSite extends Component {
  render() {
    return (
      <div>
        <div className="banner d-flex d-row align-items-center justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="banner-text title">We're getting married!</h1>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail d-flex">
            <div className="detail-title col-12 col-md-6">
              <div className="feather">
                <img alt="" src="/Palmier1-White.png" />
              </div>
              <h2 className="header">How We Met</h2>
              <p className="date">3.05.17</p>
            </div>
            <div className="vert-div" />
            <div className="detail-text col-12 col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, vitae sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, e!citur nec enim in, pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non ultrices arcu elit sed enim. <span className="extra-text">Suspendisse sit amet nisi quis felis tristique ultrices sed quis est. Nulla accumsan tincidunt sollicitudin. Maecenas scelerisque volutpat enim non venenatis. Praesent commodo.
                </span>
              </p>
            </div>
          </div>
          <div className="detail d-flex">
            <div className="detail-title col-12 col-md-6">
              <div className="feather">
                <img alt="" src="/Palmier1-White.png" />
              </div>
              <h2 className="header">The Proposal</h2>
              <p className="date">3.05.17</p>
            </div>
            <div className="vert-div" />
            <div className="detail-text col-12 col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, vitae sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, e!citur nec enim in, pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non ultrices arcu elit sed enim. <span className="extra-text">Suspendisse sit amet nisi quis felis tristique ultrices sed quis est. Nulla accumsan tincidunt sollicitudin. Maecenas scelerisque volutpat enim non venenatis. Praesent commodo.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>  
    )
  }
}

export default WeddingSite