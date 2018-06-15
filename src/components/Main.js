import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Main extends Component {
  render() {
    const { children, location } = this.props

    return (
    <div>
      <nav id="navbar" name="navbar" className="fixed-top">
        { location.pathname  !== '/wedding' ? 
          <div>
            <Link className="navbar-brand" to="/wedding" id="title">Wedding Site</Link>
            <Link className="navbar-brand" to="/users" id="title">User Grid</Link>
          </div>
        :
          <div>
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
          </div>
          }
      </nav>
      { children }
    </div>
  )}
}

export default withRouter(Main)

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object
}