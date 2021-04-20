import Link from "next/link";
export const Header = () => {
  return (
    <header id="nav-transparent">
      <nav id="navigation4" className="container navigation">
        {/* Logo and Toggler */}
        <div className="nav-header">
          <Link href="/">
            <a className="nav-brand">
              <img
                src="img/logos/logo-white.png"
                className="main-logo"
                alt="logo"
                id="light_logo"
              />
              <img
                src="img/logos/logo-2.png"
                className="main-logo"
                alt="logo"
                id="main_logo"
              />
            </a>
          </Link>
          <div className="nav-toggle" style={{ marginRight: "20px" }}></div>
        </div>

        {/* Navigation Section */}
        <div className="nav-menus-wrapper">
          <ul className="nav-menu align-to-right">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <a href="#">Services</a>
              <ul className="nav-dropdown">
                <li>
                  <Link href="/services/forex-training">
                    <a>Forex Training</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/forex-signal">
                    <a>Forex Signal</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/fund-management">
                    <a>Fund Management</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/investment">
                    <a>Investment</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/e-exchange">
                    <a>E-Exchange</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/copy-trade">
                    <a>Copy Trade</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Products</a>
              <ul className="nav-dropdown">
                <li>
                  <Link href="/products/books-and-audio">
                    <a>Books and Audio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/fx-strategy">
                    <a>FX Strategy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/binary-strategy">
                    <a>Binary Strategy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/obaforex-tools">
                    <a>Obaforex Tools</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Account</a>
              <ul className="nav-dropdown">
                <li>
                  <Link href="/account/open-account">
                    <a>Open Account</a>
                  </Link>
                </li>
                <li>
                  <Link href="/account/fund-account">
                    <a>Fund Account</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://blog.obaforex.com" target="_blank">
                Blog
              </a>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
