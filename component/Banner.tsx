export const Banner = ({ page }) => {
  return (
    <div
      className="breadcrumb-section jarallax pixels-bg"
      data-jarallax
      data-speed="0.6"
    >
      <img
        src="/img/banner-mobile.png"
        alt=""
        style={{ height: "300px", width: "100%" }}
      />
      <div
        className="container text-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginLeft: "-200px",
          marginTop: "-20px",
          // border: "1px solid red",
          width: "400px",
        }}
      >
        <h1>{page}</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">{page}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
