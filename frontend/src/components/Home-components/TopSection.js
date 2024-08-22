import { Link } from "react-router-dom";

const TopSection = () => {
    return (
        <div className="top-section">
            <div className="beige-background">

            </div>
            <div className="image-background">

            </div>
            <div className="text-setting">
                <div className="text">
                    <h1> <span className="laptop">Affordable Fashion For The Whole Family With </span> Likmat Emporium</h1>
                    <h2> <div className="laptop">We offer a wide range of stylish and affordable clothing for men, women, and children.</div> From formal wear to casual attire, we've got you covered for every occassion. Shop with us now because looking great does not have to cost a fortune</h2>

                    <div className="buttons">
                        <button className="shop-now">Shop Now</button>
                        <Link to="/all"><button className="explore">Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopSection;