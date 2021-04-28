import { Banner } from "../../../component/Banner";
import { Layout } from "../../../component/Layout";
import { Signal } from "../../../component/Signal";
import fundMangementPlan from "../../../data/fundManagementPlan.json";
import partners from "../../../data/partners.json";

const fundManagement = () => {
  return (
    <Layout title="Fund Management">
      {/* Banner */}
      <Banner page="Fund Management" />

      {/* Lets Help You Manage Your Forex Account */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">
              Lets Help You Manage Your Forex Account
            </h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              Obaforex help you trade, manage your account and give you amazing
              results. At Obaforex, <br /> we keep our promises and the minimum
              we manage is $10,000 and Maximum is $100,000
            </p>
            <a
              href="/documents/fund-management-policy.pdf"
              target="_blank"
              className="button-primary button-md"
              style={{ marginTop: "40px" }}
            >
              Read Our Policy
            </a>
          </div>

          {/* How it Works */}
          <div className="row">
            <div className="col-12">
              {/* Title and Description */}
              <div className="col-12">
                <h5 className="text-scondary mt-sm mb-3">How It Works</h5>
                <p className="mb-3">
                  The plan gives investors the opportunity to enjoy 1-2% return
                  on your investment capital everyday, Clients open a trading
                  account with our partner broker, deposit in to the trading
                  account while the account is linked to our Multi Account
                  Manager platform where trade execution will be done,
                  performance fee is charged on profit generated monthly.
                </p>
              </div>
            </div>

            {/* Side Image */}
            <div className="col-12 col-lg-4">
              <img
                src="/img/fund-manager2.png"
                alt=""
                className="mt-3 shadow-primary"
                style={{ borderRadius: "10px" }}
              />
            </div>

            {/* Plans */}
            <div className="col-12 col-lg-8">
              <div className="row">
                {fundMangementPlan.map((plan, idx) => (
                  <div key={idx} className="col-xs-12 col-md-6 col-lg-6">
                    <div className="testmonial-item-5 test-card2">
                      <h4>{plan?.name}</h4>
                      <div className="pricing-section-price">
                        <h3>
                          <sup style={{ textDecoration: "none" }}>$</sup>
                          {plan?.amount}
                        </h3>
                      </div>
                      <div className="testmonial-item-5-text mb-3">
                        <p>
                          <strong className="prop">Returns: </strong>
                          {plan?.returns}
                        </p>
                        <p>
                          <strong className="prop">Risk: </strong>
                          {plan?.risk}
                        </p>
                        <p>
                          <strong className="prop">Profit Sharing: </strong>
                          {plan?.profitSharing}
                        </p>
                        <p>
                          <strong className="prop">Withdrawal: </strong>
                          {plan?.withdrawal}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps One */}
      <div
        className="section-block section-sm partners"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container">
          {/* Step One Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">Step One</h3>
            <div className="section-heading-line line-thin"></div>
            <p>Register with one of our broker partner and fund your account</p>
          </div>

          {/* Step One Broker Partners */}
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
            {partners.map((rec, idx) => (
              <div key={idx} className="item shadow-p">
                <div className="testmonial-item-5 test-card2">
                  <img className="part-img" src={rec?.logo_path} alt="img" />
                  <div className="text-center">
                    <h4>{rec?.name}</h4>
                    <a
                      href={rec?.sign_up}
                      target="_blank"
                      className="button-primary button-md"
                      style={{ marginTop: "20px" }}
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Two */}
      <div className="section-block section-sm border-bottom bg-dot-right">
        <div className="container">
          {/* Step Two Title and Desc. */}
          <div className="section-heading text-center mb-5 pt-5">
            <h3 className="semi-bold font-size-35">Step Two</h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              Create an account with Obaforex so we can manage your fx account
            </p>
            <a
              href="#"
              target="_blank"
              className="button-primary button-md"
              style={{ marginTop: "20px" }}
            >
              Register With Us
            </a>
          </div>
        </div>
      </div>

      {/* Step Three */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Step Three Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">Step Three</h3>
            <div className="section-heading-line line-thin"></div>
            <p>We manage your fx account and help you earn more money</p>
          </div>

          {/* Step Three Broker Partners */}
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
            {partners.map((rec, idx) => (
              <div key={idx} className="item shadow-p">
                <div className="testmonial-item-5 test-card2">
                  <img className="part-img" src={rec?.logo_path} alt="img" />
                  <div className="text-center">
                    <h4>{rec?.name}</h4>
                    <a
                      href={rec?.login}
                      target="_blank"
                      className="button-primary button-md"
                      style={{ marginTop: "20px" }}
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Four */}
      <div className="section-block section-sm border-bottom bg-dot-right">
        <div className="container">
          {/* Step Four Title and Desc. */}
          <div className="section-heading text-center mb-5 pt-5">
            <h3 className="semi-bold font-size-35">Step Four</h3>
            <div className="section-heading-line line-thin"></div>
            <b>Share Profits With Obaforex</b>
            <p>
              Whenever you withdraw from your FX account that we manage, you are
              going to send Obaforex 50% of the profit made on your account.
            </p>
            <p className="mt-5 text-primary">
              <strong>PAY INTO OBAFOREX ACCOUNT BELOW</strong>
            </p>

            <p>
              Account Name: <b>OBAFOREX GLOBAL TRADING</b>
              <br />
              Account Number: <b>0561605259</b>
              <br />
              Bank: <b>GTBank</b>
            </p>
            <a
              href="/faq"
              target="_blank"
              className="button-primary button-md"
              style={{ marginTop: "20px" }}
            >
              Have A Question? Click me
            </a>
          </div>
        </div>
      </div>

      {/* Get Reliable Signals from Us */}
      <Signal bgColor="bg-white" />
    </Layout>
  );
};

export default fundManagement;
