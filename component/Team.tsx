import team from "../data/team.json";

export const Team = () => {
  return (
    <div className="section-block grey-bg background-shape-3">
      <div className="container">
        <div className="section-heading text-left text-center-xs">
          <h3 className="semi-bold mt-0">Our Team</h3>
          <div className="section-heading-line line-thin"></div>
          <p>We have the best hands. Meet Our Team Of Professionals</p>
        </div>
        <div className="row">
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
            {team.map((rec, idx) => (
              <div key={idx} className="team-box-3">
                <img src={rec?.img_path} alt="team" />
                <div className="team-box-3-info">
                  <h4>{rec?.name}</h4>
                  <span>{rec?.position}</span>
                  <ul>
                    <li>
                      <a href={rec?.social?.facebook}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={rec?.social?.twitter}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={rec?.social?.instagram}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={rec?.social?.skype}>
                        <i className="fab fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
