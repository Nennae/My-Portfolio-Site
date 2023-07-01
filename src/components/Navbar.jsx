import { Link } from "react-router-dom";

const NavBar = () => {
      return (
            <section className="nav-section">
                  <ul className="navBar">
                        <Link style={{color: 'black', margin: 10, textDecoration: 'none'}} to='/'>Work</Link>
                        <Link style={{color: 'black', margin: 10, textDecoration: 'none'}} to='/about'>About</Link>
                  </ul>
            </section>
      )
}

export default NavBar;