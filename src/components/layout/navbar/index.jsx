import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Home, User, Briefcase, Feather, Smile, GitHub } from 'react-feather'

import { NavbarElement, NavbarList, NavbarLogo } from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
        <NavbarLogo>
          <h3>
            <Link to="/" className="gradient-text" activeClassName="active">
              <Smile className="align-middle" /> <span className="align-middle"> {siteTitle} </span>
            </Link>
          </h3>
        </NavbarLogo>
        <div className="main-navigation">
          <NavbarList>
            <li><Link to="/" className="lined-link" activeClassName="active"> <Home /> <span> Home </span> </Link></li>
            <li><Link to="/about" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li>
            <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Reviews </span> </Link></li>
            <li><Link to="/blog" className="lined-link" activeClassName="active"> <Feather /> <span> Blog </span> </Link></li>
            <li><Link to="/repositories" className="lined-link" activeClassName="active"> <GitHub /> <span> Tier List </span> </Link></li>
          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
