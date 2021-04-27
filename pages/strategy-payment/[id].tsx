import { useEffect } from "react";
import { Banner } from "../../component/Banner";
import { Chill } from "../../component/Chill";
import { Layout } from "../../component/Layout";
import StrategyInfo from "../../data/strategyInfo.json";

const StrategyPayment = ({ id }) => {
  const stInfo = StrategyInfo.find((info) => info.id == id);

  console.log("Strateg: ", stInfo);

  return (
    <Layout title="Strategy Payment">
      {/* Banner */}
      <Banner page="Forex Strategy" />

      {/* Complete Your Strategy Payment */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">
              Complete Your Strategy Payment
            </h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              Thank you for choosing <b>{stInfo?.name}</b>, We are glad you made
              a decision to buy this amazing Forex trading stategy.
            </p>
            <p className="mt-2">
              You are sending{" "}
              <b>
                <span style={{ textDecoration: "double line-through" }}>N</span>{" "}
                {stInfo?.amount}{" "}
              </b>
              to the account below for the purchase of <b>{stInfo?.name}</b> .{" "}
              <br />
              <a href="#">Read our Terms and Condition</a>
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
            <p>
              Send your proof of payment to our account desk -
              <a href="mailto:deposit@obaforex.com">deposit@obaforex.com</a> for
              activation.
              <br />
              You can call or chat us for support
            </p>
          </div>
          <div className="text-center">
            <a
              href="tel:+234943439595"
              className="button-primary button-md"
              style={{ margin: "10px", zIndex: 1 }}
            >
              Call Us Now <i className="fas fa-phone ml-2"></i>
            </a>
            <a
              href="http://wa.me/234943439595"
              className="button-primary button-md"
              style={{ margin: "10px", zIndex: 1 }}
            >
              Chat With Us <i className="fab fa-whatsapp ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Invest and Chill */}
      <Chill bgColor="bg-white" />
    </Layout>
  );
};

StrategyPayment.getInitialProps = ({ query }) => {
  return {
    id: query?.id,
  };
};

export default StrategyPayment;
