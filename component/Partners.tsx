import items from "../data/partners.json";

export const Partners = () => {
    return (
        <div className="section-block section-sm border-bottom partners">
            <div className="container">
                <div className="section-heading text-center mb-5">
                    <h3 className="semi-bold">Our Partners</h3>
                    <div className="section-heading-line"></div>
                    <p>Our Top Partners</p>
                </div>
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
                    {items.map((item, idx) => (
                        <div key={idx} className="item">
                            <img className="part-img" src={item.logo_path} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
