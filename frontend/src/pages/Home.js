import Deals from "../components/Home-components/Deals";
import FeaturesSection from "../components/Home-components/FeaturesSection";
import SurfSection from "../components/Home-components/SurfSection";
import TopSection from "../components/Home-components/TopSection";

const Home = () => {
    return (
        <div className="home">
            <div>
                <TopSection />
            </div>

            {/* <Theme id="themeButton"/> */}


            <div className="section-two">
                <div className="h2-cards">
                    <h2>Our perks</h2>
                </div>

                <div className="section-two-text-grid">
                    <div className="text-box">


                        <div className="inner-second-section-box">
                            <i className="fa-solid fa-check-double"></i>
                            <h3>Elite clientele</h3>
                            <p>
                                We serve customers who appreciate quality and
                                unique finds, making us their trusted choice for exclusive
                                shopping.
                            </p>
                        </div>
                    </div>

                    <div className="text-box">

                        <div className="inner-second-section-box">
                            <i className="fa-solid fa-check-double"></i>
                            <h3>Great reviews</h3>
                            <p>
                                Our customers love us and say great things about our quality
                                and service. Discover why they're so satisfied! Shop with us now!
                            </p>
                        </div>
                    </div>

                    <div className="text-box">

                        <div className="inner-second-section-box">
                            <i className="fa-solid fa-check-double"></i>
                            <h3>Discounts</h3>
                            <p>
                            Enjoy unbeatable discounts on our top products. Looking good doesn't have to 
                            cost a fortune. Elevate your style for less. Shop now and save big
                            </p>
                        </div>
                    </div>
                </div>
            </div>






            <div className="section-three">
                <div className="h2-cards">
                    <h2>Featured Products</h2>
                </div>

                <FeaturesSection />
            </div>







            <div className="fourth-section">
                <div className="h2-cards">
                    <h2>Ongoing Deals</h2>
                </div>

                <Deals />
            </div>




            <div className="fifth-section ">
                <div className="h2-cards">
                    <h2> Surf Our Merch </h2>
                </div>

                <SurfSection />
            </div>


        </div>
    );
}

export default Home;