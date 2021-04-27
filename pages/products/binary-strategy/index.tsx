import { Banner } from "../../../component/Banner";
import { Copy } from "../../../component/Copy";
import { Layout } from "../../../component/Layout";

const BinaryStrategy = () => {
  return (
    <Layout title="Binary Strategy">
      {/* Banner */}
      <Banner page="Binary Strategy" />

      {/* Obaforex Best Binary Strategy */}
      <div
        className="section-block grey-bg background-shape-3"
        style={{ marginTop: "-60px" }}
      >
        <div className="container">
          <div className="row">
            {/* Image Section */}
            <div className="col-md-6 col-12">
              <img
                src="/img/copy-trade.png"
                className="rounded-border"
                alt="footer_logo"
              />
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
                          <i className="fas fa-check-circle"></i>Perfect Entry
                          and Exist Point
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>VL25, VL75
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <ul className="primary-list mt-20">
                        <li>
                          <i className="fas fa-check-circle"></i>5min TimeFrame
                          only
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Risk management
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
