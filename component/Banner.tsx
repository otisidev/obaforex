export const Banner = ({ page }) => {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="page-header-shape-1"></div>
        <div className="page-header-shape-2"></div>
        <div className="page-header-shape-3"></div>

        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>{page}</li>
            </ul>
            <h2>{page}</h2>
          </div>
        </div>
      </section>
    </>
  );
};
