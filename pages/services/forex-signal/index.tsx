import { Banner } from "../../../component/Banner";
import { Chill } from "../../../component/Chill";
import { Layout } from "../../../component/Layout";
import signalService from "../../../data/signalService.json";

const forexSignal = () => {
  return (
    <Layout title="Forex Signal">
      {/* Banner */}
      <Banner page="Forex Signal" />

      {/* We Provide forex signals */}
      <div className="section-block grey-bg">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center">
            <h3 className="semi-bold font-size-35">We Provide Forex Signals</h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              Forex Signal Provider by Obaforex. <br /> Ensuring that traders
              understand why Stop Losses and Take Profit levels are placed, and
              where they are placed.
              <br /> Obaforex Group can provide you with daily and live forex
              signals and help you to improve in your trading strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Because we keep our promises */}
      <div
        className="section-block grey-bg background-shape-3"
        style={{ marginTop: "-60px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/img/signal2.png" className="rounded-border" alt="" />
            </div>
            <div className="col-md-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <small className="text-scondary mt-sm">
                    We got you covered
                  </small>
                  <h3 className="semi-bold font-size-32">
                    Because We Keep Our Promises
                  </h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <p>
                      We send out signals for: EUR/USD, USD/CHF, EUR/CHF,
                      USD/CAD, USD/JPY, GBP/USD, EUR/GBP, AUD/USD, CHF/JPY,
                      AUD/JPY, EUR/JPY, NZD/JPY, GBP/JPY, NZD/USD, GOLD, CRUDE
                      OIL .
                      <br />
                      Forex Signals are now becoming increasingly popular for
                      traders. Our Signals are sent to WorldWide using our VPS
                      Server,
                      <br />
                      There are no delays with WhatsApp | Telegram alerts as we
                      use state of the art Cloud technology
                    </p>
                    <p>
                      For prompt delivery, we have over 56 Servers located all
                      around the world.
                      <br />
                      <strong>Examples: </strong>
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <ul className="primary-list mt-20">
                        <li>
                          <i className="fas fa-check-circle"></i>BUY USD CAD @
                          1.30742 FINAL TP 1.31293
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>BUY CHF/JPY @
                          538.93 FINAL TP 600.84
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <ul className="primary-list mt-20">
                        <li>
                          <i className="fas fa-check-circle"></i>BUY AUD/USD @
                          8550.05 FINAL TP 9107.26
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>SELL EURUSD @
                          1.22701 FINAL TP 1.22241
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Pricing Plans */}
      <div className="section-block">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center">
            <h3 className="semi-bold font-size-35">Our Pricing Plans</h3>
            <div className="section-heading-line line-thin"></div>
            <p>Choose your Signal Plan</p>
          </div>

          <div className="row no-gutters">
            <div
              className="col-md-6 col-sm-12 col-lg-4 col-12 wow fadeInLeftSm"
              data-wow-delay="0.9s"
            >
              <div className="pricing-section pricing-section-advanced">
                <div className="pricing-section-price">
                  <h4>Beginner Trader Package</h4>
                  <h6>*Rates are subject to change</h6>
                  <h2>
                    <sup>$</sup>50
                    <span style={{ fontSize: "18px", color: "#bb712a" }}>
                      {" "}
                      / Mnth
                    </span>
                  </h2>
                </div>
                <ul>
                  <li>WhatsApp | Telegram | Email</li>
                  <li>24/7 Support</li>
                  <li>Signal Entry. Exit. Stop Loss</li>
                  <li>Popular package</li>
                  <li>Aim of 500 pips per month</li>
                  <li>Works With ALL Forex Brokers</li>
                  <li>Card | Neteller | Bank Deposit</li>
                </ul>
              </div>
            </div>

            <div
              className="col-md-6 col-sm-12 col-lg-4 col-12 wow fadeInLeftSm"
              data-wow-delay="0.7s"
            >
              <div className="pricing-section shadow-primary">
                <div className="pricing-section-price">
                  <h4>Basic FX Trader Package</h4>
                  <h6>*Rates are subject to change</h6>
                  <h2>
                    <sup>$</sup>130
                    <span style={{ fontSize: "18px", color: "#bb712a" }}>
                      {" "}
                      / 3-Mnth
                    </span>
                  </h2>
                </div>
                <ul>
                  <li>WhatsApp | Telegram | Email</li>
                  <li>24/7 Support</li>
                  <li>Signal Entry. Exit. Stop Loss</li>
                  <li>Free Best Forex Indicator 2017-2020 worth $199</li>
                  <li>Aim of 1000 pips per month</li>
                  <li>Works With ALL Forex Brokers</li>
                  <li>Card | Neteller | Bank Deposit</li>
                </ul>
              </div>
            </div>

            <div
              className="col-md-6 col-sm-12 col-lg-4 col-12 wow fadeInLeftSm"
              data-wow-delay="0.9s"
            >
              <div className="pricing-section pricing-section-advanced">
                <div className="pricing-section-price">
                  <h4>Pro FX Trader Package</h4>
                  <h6>*Rates are subject to change</h6>
                  <h2>
                    <sup>$</sup>130
                    <span style={{ fontSize: "18px", color: "#bb712a" }}>
                      {" "}
                      / 3-Mnth
                    </span>
                  </h2>
                </div>
                <ul>
                  <li>WhatsApp | Telegram | Email</li>
                  <li>24/7 Support</li>
                  <li>Signal Entry. Exit. Stop Loss</li>
                  <li>Free Best Forex Indicator 2017-2020 worth $299</li>
                  <li>Aim of 1400 pips per month</li>
                  <li>Works With ALL Forex Brokers</li>
                  <li>Card | Neteller | Bank Deposit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signal Service in four steps */}
      <div className="pb-5 section-block grey-bg jarallax">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Title and Desc. */}
              <div className="section-heading text-left pt-5">
                <h3 className="semi-bold mt-5">Signal Service in Four Steps</h3>
                <div className="section-heading-line line-thin"></div>
              </div>

              <div className="row">
                {signalService.map((rec, idx) => (
                  <div key={idx} className="col-xs-12 col-md-6 mt-2">
                    <div className="contact-icon-box callback-block p-5 why-train-card">
                      <div className="testmonial-box-icon numb">{idx + 1}</div>
                      <div className="testmonial-box-content">
                        <h3>{rec?.title}</h3>
                        <p>{rec?.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

export default forexSignal;
