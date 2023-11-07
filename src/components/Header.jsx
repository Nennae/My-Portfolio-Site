import NavBar from "./Navbar";

const Header = () => {

      return (
            <header className="header">
                  <div className="headerDiv">
                  <h1 className="title">S.E</h1>
                  <p className="subTitle">Developer & Designer</p>
                  </div>
                  <div className="lightDarkDiv">
                        <p>Dark |</p>
                        <p>Light</p>
                  </div>
                  <NavBar/>
            </header>
      )
}

export default Header;