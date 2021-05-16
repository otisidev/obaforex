import { Banner } from "../../../component/Banner";
import { Copy } from "../../../component/Copy";
import { Layout } from "../../../component/Layout";
import { TradeViewTop } from "../../../component/TradeViewTop";

const BinaryStrategy = () => {
  return (
    <Layout title="Binary Strategy">
      {/* Banner */}
      <Banner page="Binary Strategy" />

      {/* Trade View */}
      <div id="top-bar">
        <TradeViewTop />
      </div>

      {/* Obaforex Best Binary Strategy */}
      <div
        className="section-block grey-bg background-shape-3"
        style={{ marginTop: "-60px" }}
      >
        <div className="container">
          <div className="row">
            {/* Image Section */}
            <div className="col-md-6 col-12">
              <div className="shadow-primary p-3">
                <img
                  src="/img/binary.png"
                  className="rounded-border"
                  alt="footer_logo"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="col-md-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <small className="text-scondary mt-sm">
                    WE PROVIDE STRATEGY
                  </small>
                  <h3 className="semi-bold font-size-32">
                    Obaforex Best Binary Strategy
                  </h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <p>
                      Picking the Best Binary Strategy for You, When it comes to
                      clarifying what the best and most profitable binary
                      trading strategy is, there really is no single answer.
                      <br />
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <ul className="primary-list mt-20">
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">
                            Perfect Entry and Exist Point
                          </div>
                        </li>
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">VL25, VL75</div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <ul className="primary-list mt-20">
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">5min TimeFrame only</div>
                        </li>
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">Risk management</div>
                        </li>
                      </ul>
                    </div>

                    {/* Payment button */}
                    <div className="col-12">
                      <br />
                      <a
                        href="#"
                        className="button-md button-primary"
                        style={{ zIndex: 1 }}
                      >
                        Pay{" "}
                        <span style={{ textDecoration: "double line-through" }}>
                          N
                        </span>
                        250,000
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Are One Of The World’s Most Trusted Forex Copier */}
      <Copy bgColor="bg-white" />
    </Layout>
  );
};

export default BinaryStrategy;
