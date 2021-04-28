export const Partners = () => {
  return (
    <div className="section-block section-sm border-bottom partners">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <h3 className="semi-bold">Our Partners</h3>
          <div className="section-heading-line"></div>
          <p>Our Top Partners</p>
        </div>
        <div
          className="owl-carousel owl-theme customizable-carousel mt-50"
          data-loop="true"
          data-items="4"
          data-md-items="4"
          data-sm-items="1"
          data-xs-items="1"
          data-space="15"
          data-autoplay="true"
          data-autospeed="4000"
          data-nav-dots="true"
          data-nav-arrows="false"
        >
          <div className="item">
            <img
              className="part-img"
              src="/img/partners/hotforex-logo.png"
              alt="img"
            />
          </div>
          <div className="item">
            <img
              className="part-img"
              src="/img/partners/binary-logo.png"
              alt="img"
            />
          </div>
          <div className="item">
            <img
              className="part-img"
              src="/img/partners/xm-broker-logo.png"
              alt="img"
            />
          </div>
          <div className="item">
            <img
              className="part-img"
              src="/img/partners/berry-logo.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
