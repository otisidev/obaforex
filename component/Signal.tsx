type prop = {
  bgColor?: string;
};
export const Signal = ({ bgColor }: prop) => {
  return (
    <div
      className={`action-box action-box-md ${
        bgColor ? bgColor : "grey-bg"
      } center-holder-xs`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-12">
            <h3 className="bold">Get Reliable Signals From Us</h3>
            <p>Follow Us for Signals and reliable pointers on what to trade</p>
          </div>
          <div className="col-md-2 col-12 text-right center-holder-xs mt-10">
            <a
              href="/services/forex-signal"
              className="button-md button-primary"
            >
              Get Signals
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
