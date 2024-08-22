import Footer from "./Home-components/Footer";

const Subscribe = () => {
    return (
        <div id="footer">
            <Footer />

            <div className="subscribe">
                <h2>Subscribe To Get Latest Deals</h2>

                <div className="sub">
                    <input className="input" placeholder="Enter your email address"></input>
                    <button className="submit">Submit</button>
                </div>

            </div>
        </div>

    );
}

export default Subscribe;