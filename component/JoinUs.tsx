type prop = {
  bgColor?: string;
};
export const JoinUs = ({ bgColor }: prop) => {
  return (
      <div className={`action-box action-box-md ${bgColor ? bgColor : "grey-bg"} center-holder-xs`}>
          <div className="container">
              <div className="row">
                  <div className="col-md-10 col-12">
                      <h3 className="bold">Join Us and Relax</h3>
                      <p>Join Us let's help you with all the complexities of Forex Trading</p>
                  </div>
                  <div className="col-md-2 col-12 text-right center-holder-xs mt-10">
                      <a href="https://app.obaforex.com/auth/on-boarding/request" className="button-md button-primary">
                          Join Us
                      </a>
                  </div>
              </div>
          </div>
      </div>
  );
};
