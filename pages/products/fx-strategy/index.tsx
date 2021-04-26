import { Banner } from "../../../component/Banner";
import { Chill } from "../../../component/Chill";
import { Layout } from "../../../component/Layout";

const ForexStrategy = () => {
  return (
    <Layout title="Forex Strategy">
      {/* Banner */}
      <Banner page="Forex Strategy" />

      {/* Obaforex Best Strategy Shop */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">
              Obaforex Best Strategy Shop
            </h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              Picking the Best Forex Strategy for You, When it comes to
              clarifying what the best and most profitable Forex trading
              strategy is, there really is no single answer. Here's why: The
              best FX strategies will be suited to the individual. This means
              you need to consider your personality and work out the best Forex
              strategy that suit you.
            </p>
            <p className="mt-2">
              {" "}
              Obaforex Group can provide you with the best FX Strategy that will
              meet your specific needs. <br />
              <strong>Choose below</strong>
            </p>

            {/* Plans */}
            <div className="row  pt-5">
              <div
                className="col-md-6 col-sm-12 col-lg-3 col-12 wow fadeInLeftSm"
                data-wow-delay="0.9s"
              >
                <div className="pricing-section pricing-section-advanced shadow-primary">
                  <div className="pricing-section-price">
                    <h4>Amos 3 - 3 Strategy</h4>
                    <h2>
                      <sup>$</sup>299
                    </h2>
                  </div>
                  <ul>
                    <li>Perfect Entry and Exit Point</li>
                    <li>EURUSD, EURGBP, GBPJPY, GBPUSD, AUDUSD, USDJPY</li>
                    <li>1hour Timeframe</li>
                    <li>Risk management</li>
                    <li>40pips per trade</li>
                    <li>Sound Alert</li>
                  </ul>

                  <a
                    href="/documents/copy-trade-policy.pdf"
                    target="_blank"
                    className="button-primary button-md"
                    style={{ marginTop: "40px" }}
                  >
                    Get Strategy
                  </a>
                </div>
              </div>

              <div
                className="col-md-6 col-sm-12 col-lg-3 col-12 wow fadeInLeftSm"
                data-wow-delay="0.9s"
              >
                <div className="pricing-section pricing-section-advanced shadow-primary">
                  <div className="pricing-section-price">
                    <h4>5 - 13 - 63 Strategy</h4>
                    <h2>
                      <sup>$</sup>100
                    </h2>
                  </div>
                  <ul>
                    <li>Perfect Entry and Exit Point</li>
                    <li>EURUSD, GBPUSD, AUDUSD, USDJPY</li>
                    <li>15min & 1hour Timeframe</li>
                    <li>Risk management</li>
                    <li>20pips per trade</li>
                    <li>Sound Alert</li>
                  </ul>

                  <a
                    href="/documents/copy-trade-policy.pdf"
                    target="_blank"
                    className="button-primary button-md"
                    style={{ marginTop: "40px" }}
                  >
                    Get Strategy
                  </a>
                </div>
              </div>

              <div
                className="col-md-6 col-sm-12 col-lg-3 col-12 wow fadeInLeftSm"
                data-wow-delay="0.9s"
              >
                <div className="pricing-section pricing-section-advanced shadow-primary">
                  <div className="pricing-section-price">
                    <h4>Obaforex Genesis Strategy</h4>
                    <h2>
                      <sup>$</sup>499
                    </h2>
                  </div>
                  <ul>
                    <li>Perfect Entry and Exit Point</li>
                    <li>EURUSD, EURGBP, GBPJPY, GBPUSD, AUDUSD, USDJPY</li>
                    <li>1hour Timeframe</li>
                    <li>Risk management</li>
                    <li>70pips per trade</li>
                    <li>Sound Alert</li>
                  </ul>

                  <a
                    href="/documents/copy-trade-policy.pdf"
                    target="_blank"
                    className="button-primary button-md"
                    style={{ marginTop: "40px" }}
                  >
                    Get Strategy
                  </a>
                </div>
              </div>

              <div
                className="col-md-6 col-sm-12 col-lg-3 col-12 wow fadeInLeftSm"
                data-wow-delay="0.9s"
              >
                <div className="pricing-section pricing-section-advanced shadow-primary">
                  <div className="pricing-section-price">
                    <h4>Obaforex Revolution</h4>
                    <h2>
                      <sup>$</sup>999
                    </h2>
                  </div>
                  <ul>
                    <li>Perfect Entry and Exit Point</li>
                    <li>EURUSD, EURGBP, GBPJPY, GBPUSD, AUDUSD, USDJPY</li>
                    <li>1hour Timeframe</li>
                    <li>Risk management</li>
                    <li>120pips per trade</li>
                    <li>Sound Alert</li>
                  </ul>

                  <a
                    href="/documents/copy-trade-policy.pdf"
                    target="_blank"
                    className="button-primary button-md"
                    style={{ marginTop: "40px" }}
                  >
                    Get Strategy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invest and Chill */}
      <Chill bgColor="bg-white" />
    </Layout>
  );
};

export default ForexStrategy;
