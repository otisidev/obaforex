export const MoreAboutUs = () => {
  return (
    <section className="financial-advice">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="financial-advice__box tabs-box">
              <ul className="tab-btns tab-buttons clearfix list-unstyled">
                <li data-tab="#team" className="tab-btn active-btn">
                  <span>Our Team</span>
                </li>
                <li data-tab="#involvement" className="tab-btn">
                  <span>Our Investments</span>
                </li>
                <li data-tab="#commitment" className="tab-btn">
                  <span>Our Commitment</span>
                </li>
                <li data-tab="#system" className="tab-btn">
                  <span>Our System</span>
                </li>
              </ul>
              <div className="tabs-content">
                {/* Our Team */}
                <div className="tab active-tab" id="team">
                  <div className="financial-advice__content">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="financial-advice__single-1 financial-advice__single-2">
                          <h3>A Team of Young Experts</h3>
                          <br />
                          <p className="financial-advice_-desc">
                            Obaforex is managed by a young team with expertise
                            and experience from the fields of management,
                            information technology, finance, sales and
                            marketing.
                          </p>
                          <p>
                            Founder & CEO – Moses B. Samuel is an experienced
                            Fund Manager and IT Professional with over 15 years
                            combined cross-field experience in Management, IT,
                            Marketing and Sales. He founded Obatech Computing
                            Technologies; an IT company that provides
                            proprietary IT Services, Training and IT business
                            solutions in 2009.
                          </p>
                          <p>
                            We are a team of experienced currency traders and
                            traders with over 14 years’ experience in the
                            currency, blockchain industry.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="financial-advice__single-1 financial-advice__single-3">
                          <div className="financial-advice__img">
                            <img
                              src="assets/images/resources/our-team.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Investments */}
                <div className="tab" id="involvement">
                  <div className="financial-advice__content">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="financial-advice__single-1 financial-advice__single-2">
                          <h3>We Do More</h3>
                          <br />
                          <p className="financial-advice_-desc">
                            Obaforex is actively engaged in day-trading of
                            foreign currency exchange on major exchanges,
                            flipping of ICOs, and signal provideing.
                          </p>
                          <p>
                            We also engage in building and growing series of
                            offline businesses such as Obaforex Corporate
                            Services, Obaforex ICT Training, Obaforex
                            Restaurants, Obaforex Transport Services, Obaforex
                            Entertainment, Obaforex Farm, Obaforex Real Estate,
                            Obaforex Computer Clinic and Obaforex Digital
                            Studio, etc.
                          </p>
                          <p>
                            We are involved in short-term trading of selected
                            products and services producing consistent profits;
                            and other business opportunities as our experts
                            determines to be profitable and sustainable.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="financial-advice__single-1 financial-advice__single-3">
                          <div className="financial-advice__img">
                            <img
                              src="assets/images/resources/our-involvements.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Commitment */}
                <div className="tab" id="commitment">
                  <div className="financial-advice__content">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="financial-advice__single-1 financial-advice__single-2">
                          <h3>We Keep Our Promises</h3>
                          <br />
                          <p className="financial-advice_-desc">
                            Let’s GROW YOUR MONEY by 25% every month
                          </p>
                          <p>
                            At Obaforex, you invest a minimum of one hundred
                            thousand naira (N100,000) and maximum of Hundrend
                            million naira (N100,000,000) and earn 25% monthly
                            for 12 months
                          </p>
                          <p>
                            As such, we guarantee the safety of your invested
                            capital. So you are in control of your capital.
                            Therefore, with us, there's no possibility of you
                            losing your capital and we are committed to
                            delivering a good trading result!
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="financial-advice__single-1 financial-advice__single-3">
                          <div className="financial-advice__img">
                            <img
                              src="assets/images/resources/our-commitment.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Commitment */}
                <div className="tab" id="system">
                  <div className="financial-advice__content">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="financial-advice__single-1 financial-advice__single-2">
                          <h3>We are sophisticated</h3>
                          <br />
                          <p className="financial-advice_-desc">
                            Obaforex is a financial technology and automated
                            trading & investment service company.
                          </p>
                          <p>
                            We offer sophisticated A.I driven automated trading
                            solutions for financial markets.
                          </p>
                          <p>
                            Our mission is to simplify investing & empower
                            investors with innovations in financial & machine
                            learning sciences. Our artificial intelligence for
                            algorithmic trading formulates winning strategies &
                            rigorous risk management to grow client’s wealth.
                          </p>
                          <p>
                            We develop sophisticated trading models that are
                            able to continuously learn and improve using
                            advances in A.I, artificial neural network, machine
                            learning, deep learning, big data, and analytics to
                            minimize client risk and maximize returns.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="financial-advice__single-1 financial-advice__single-3">
                          <div className="financial-advice__img">
                            <img
                              src="assets/images/resources/our-system.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
