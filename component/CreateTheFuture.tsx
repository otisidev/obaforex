type prop = {
  bgColor?: string;
};
export const CreateTheFuture = ({ bgColor }: prop) => {
  return (
    <div
      className={`action-box action-box-md ${
        bgColor ? bgColor : "grey-bg"
      } center-holder-xs`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-12">
            <h3 className="bold">Create the future you want</h3>
            <p>The best way to create the future is to create it</p>
          </div>
          <div className="col-md-2 col-12 text-right center-holder-xs mt-10">
            <a href="#" className="button-md button-primary">
              Join Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
