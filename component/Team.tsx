import team from "../data/team.json";
export const Team = () => {
  return (
    <section className="team-one team-page">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="section-title__title">Our Team</h2>
          <span className="section-title__tagline">
            Obaforex Top Team and Trading experts
          </span>
        </div>
        <div className="row">
          {/* Team One Single */}
          {team?.map((rec, idx) => (
            <div
              key={idx}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src={rec?.img_path} alt="" />
                  <div className="team-one__hover-content">
                    <h3 className="team-one__name">{rec?.name}</h3>
                    <p className="team-one__title">{rec?.position}</p>
                  </div>
                  <div className="team-one__bottom">
                    <div className="team-one__social">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="clr-fb">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
