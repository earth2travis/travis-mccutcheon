import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require("../images/tm-logo.svg")} width="30" alt="logo" />
      </Link>
      <Link to="/articles">Articles</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
