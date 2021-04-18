export const MobileNav = () => {
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>
          {/* Logo */}
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="assets/images/logo-1.png" width="155" alt="" />
            </a>
          </div>
          {/* Nav Container */}
          <div className="mobile-nav__container"></div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:helpdesk@obaforex.com">helpdesk@obaforex.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:666-888-0000">+2349043430808</a>
            </li>
          </ul>
          {/* <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
