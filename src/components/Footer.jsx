import { Link } from "react-router-dom";
import RecentWork from "./RecentWork";

const Footer = () => {
      return (
            <section className="footer">
                  <ul className="footerLinks">
                        <Link style={{color: 'black', margin: 10, textDecoration: 'none'}} to='/'>Github</Link>
                        <Link style={{color: 'black', margin: 10, textDecoration: 'none'}} to='/about'>Linkedin
                        </Link>
                        <Link style={{color: 'black', margin: 10, textDecoration: 'none'}} to='/about'>Email</Link>
                  </ul>
                  <RecentWork/>
            </section>
      )
}

export default Footer;