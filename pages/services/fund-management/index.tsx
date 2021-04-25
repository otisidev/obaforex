import { Banner } from "../../../component/Banner";
import { Layout } from "../../../component/Layout";
import { Signal } from "../../../component/Signal";

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
                {/* Bronze Plan  */}
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <div className="testmonial-item-5 test-card2">
                    <h5>Bronze Plan </h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        <strong className="prop">Returns: </strong>
                        100% Returns monthly
                      </p>
                      <p>
                        <strong className="prop">Risk: </strong>10% maximum draw
                        down (Risk Exposure)
                      </p>
                      <p>
                        <strong className="prop">Profit Sharing: </strong>
                        50 - 50
                      </p>
                      <p>
                        <strong className="prop">Withdrawal: </strong>
                        Instant withdrawal
                      </p>
                      <p>
                        <strong className="prop">Amount to Invest: </strong>
                        <span style={{ fontSize: "24px" }}>$10,000</span>
                      </p>
                    </div>
                    <div className="mt-20">
                      <a href="#" className="button-primary button-md">
                        Start Today
                      </a>
                    </div>
                  </div>
                </div>

                {/* Gold Plan */}
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <div className="testmonial-item-5 test-card2">
                    <h5>Gold Plan</h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        <strong className="prop">Returns: </strong>
                        100% Returns monthly
                      </p>
                      <p>
                        <strong className="prop">Risk: </strong>10% maximum draw
                        down (Risk Exposure)
                      </p>
                      <p>
                        <strong className="prop">Profit Sharing: </strong>
                        50 - 50
                      </p>
                      <p>
                        <strong className="prop">Withdrawal: </strong>
                        Instant withdrawal
                      </p>
                      <p>
                        <strong className="prop">Amount to Invest: </strong>
                        <span style={{ fontSize: "24px" }}>$25,000</span>
                      </p>
                    </div>
                    <div className="mt-20">
                      <a href="#" className="button-primary button-md">
                        Start Today
                      </a>
                    </div>
                  </div>
                </div>

                {/* Diamond Plan */}
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <div className="testmonial-item-5 test-card2">
                    <h5>Diamond Plan</h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        <strong className="prop">Returns: </strong>
                        100% Returns - Quarterly(3 Months)
                      </p>
                      <p>
                        <strong className="prop">Risk: </strong>10% maximum draw
                        down (Risk Exposure)
                      </p>
                      <p>
                        <strong className="prop">Profit Sharing: </strong>
                        40 - 60
                      </p>
                      <p>
                        <strong className="prop">Withdrawal: </strong>
                        Instant withdrawal
                      </p>
                      <p>
                        <strong className="prop">Amount to Invest: </strong>
                        <span style={{ fontSize: "24px" }}>$50,000</span>
                      </p>
                    </div>
                    <div className="mt-20">
                      <a href="#" className="button-primary button-md">
                        Start Today
                      </a>
                    </div>
                  </div>
                </div>

                {/* Platinum Plan */}
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <div className="testmonial-item-5 test-card2">
                    <h5>Platinum Plan</h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        <strong className="prop">Returns: </strong>
                        100% Returns - Quarterly(3 Months)
                      </p>
                      <p>
                        <strong className="prop">Risk: </strong>20% maximum draw
                        down (Risk Exposure)
                      </p>
                      <p>
                        <strong className="prop">Profit Sharing: </strong>
                        60 - 40
                      </p>
                      <p>
                        <strong className="prop">Withdrawal: </strong>
                        Instant withdrawal
                      </p>
                      <p>
                        <strong className="prop">Amount to Invest: </strong>
                        <span style={{ fontSize: "24px" }}>$100,000</span>
                      </p>
                    </div>
                    <div className="mt-20">
                      <a href="#" className="button-primary button-md">
                        Start Today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Reliable Signals from Us */}
      <Signal bgColor="bg-white" />
    </Layout>
  );
};

export default fundManagement;
