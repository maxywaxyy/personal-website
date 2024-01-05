import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `24px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: 'space-between',
    }}
  >

    <Link
      to="/"
      style={{
        textAlign: `left`,
        textDecoration: `none`,
      }}
    >pushing positivity</Link>
    
    
    <div className="links">
    <Link to={"/"}>Home</Link>
      <Link to={"/portfolio"}>Portfolio</Link>
      <Link to={"/fun"}>Fun</Link>
      <Link to={"/contact"}>Contact</Link>

    </div>

  </header>
)

export default Header
