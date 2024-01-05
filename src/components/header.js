import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: 'space-between',
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    
    <div className="links">
    <Link to={"/"}>Home</Link>
      <Link to={"/portfolio"}>Portfolio</Link>
      <Link to={"/fun"}>Fun</Link>
      <Link to={"/contact"}>Contact</Link>

    </div>

  </header>
)

export default Header
