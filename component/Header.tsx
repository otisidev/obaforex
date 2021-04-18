export const Header = () => {
  return (
    <>
      <header className="main-header clearfix">
        <nav className="main-menu clearfix">
          <div className="main-menu-wrapper">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__logo">
                <a href="index.html">
                  <img src="assets/images/logo-1.png" alt="" />
                </a>
              </div>
              <div className="main-menu-wrapper__main-menu">
                <a href="#" className="mobile-nav__toggler">
                  <span className="mobile-nav__toggler-bar"></span>
                  <span className="mobile-nav__toggler-bar"></span>
                  <span className="mobile-nav__toggler-bar"></span>
                </a>
                <ul className="main-menu__list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Services</a>
                    <ul>
                      <li>
                        <a href="/training">Forex Training</a>
                      </li>
                      <li>
                        <a href="/signal">Forex Signal</a>
                      </li>
                      <li>
                        <a href="/fund-management">Fund Management</a>
                      </li>
                      <li>
                        <a href="/investment">Investment</a>
                      </li>
                      <li>
                        <a href="/e-exchange">E-Exchange</a>
                      </li>
                      <li>
                        <a href="/copy-trade">Copy Trade</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Products</a>
                    <ul>
                      <li>
                        <a href="/books-and-audio">Books And Audio</a>
                      </li>
                      <li>
                        <a href="/strategy">FX Strategy</a>
                      </li>
                      <li>
                        <a href="/binary">Binary Strategy</a>
                      </li>
                      <li>
                        <a href="/tools">Obaforex Tools</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Account</a>
                    <ul>
                      <li>
                        <a href="/create-account">Open Account </a>
                      </li>
                      <li>
                        <a href="/fund-account">Fund Account</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__social-box">
                <div className="main-menu-wrapper__social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="clr-fb">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="clr-dri">
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a href="#" className="clr-ins">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="main-menu-wrapper__search-box">
                <a
                  href="#"
                  className="main-menu-wrapper__search search-toggler icon-magnifying-glass1"
                ></a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
};
