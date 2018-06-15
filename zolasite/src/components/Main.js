import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Main extends Component {
  render() {
    const { children, location } = this.props
    console.log(this.props)
    return (
    <div>
     { location.pathname  === '/' && 
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/wedding" id="title">Wedding Site</Link>
          <Link className="navbar-brand" to="/users" id="title">User Grid</Link>
          <hr className="hr-nav" />
        </nav>
      }
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