import Link from "next/link";
export const Header = () => {
  return (
    <header id="nav-transparent">
      <nav id="navigation4" className="container navigation">
        {/* Logo and Toggler */}
        <div className="nav-header">
          <a href="/" className="nav-brand">
            <img
              src="/img/logos/logoWhite.png"
              className="main-logo"
              alt="logo"
              id="light_logo"
            />
            <img
              src="/img/logos/logoMain.png"
              className="main-logo"
              alt="logo"
              id="main_logo"
            />
            {/* Toggler */}
          </a>
          <div className="nav-toggle" style={{ marginRight: "20px" }}></div>
        </div>

        {/* Navigation Section */}
        <div className="nav-menus-wrapper">
          <ul className="nav-menu align-to-right">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/services/forex-training">Forex Training</a>
                </li>
                <li>
                  <a href="/services/forex-signal">Forex Signal</a>
                </li>
                <li>
                  <a href="/services/fund-management">Fund Management</a>
                </li>
                <li>
                  <a href="/services/investment">Investment</a>
                </li>
                <li>
                  <a href="/services/e-exchange">E-Exchange</a>
                </li>
                <li>
                  <a href="/services/copy-trade">Copy Trade</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Products</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/products/fx-strategy">FX Strategy</a>
                </li>
                <li>
                  <a href="/products/binary-strategy">Binary Strategy</a>
                </li>
                <li>
                  <a href="/products/obaforex-tools">Obaforex Tools</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Account</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Create Account</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://blog.obaforex.com" target="_blank">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faq">faq</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
