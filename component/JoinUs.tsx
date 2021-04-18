export const JoinUs = () => {
  return (
    <section className="cta-one">
      <div
        className="cta-one-bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/cta-one-bg.png)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta-one__inner">
              <div className="cta-one__left">
                <h2 className="cta-one__title">
                  we’re delivering the best <br /> customer experience
                </h2>
              </div>
              <div className="cta-one__right">
                <a href="join" className="thm-btn cta-one__btn">
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
