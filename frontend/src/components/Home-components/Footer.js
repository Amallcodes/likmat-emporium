const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="">
            <p className="copyright">copyright {year} Likmat Emporium</p>

            <div className="footer">
                <div className="footer-box laptop">
                    <h2>Your Security</h2>

                    <div className="footer-text">
                        <p>Terms and conditions</p>
                        <p>Cookie policy</p>
                        <p>Guaranteed privacy</p>
                        <p>Accessibility</p>
                    </div>
                </div>

                <div className="footer-box laptop">
                    <h2>Perks</h2>

                    <div className="footer-text">
                        <p>Constant Deals</p>
                        <p>Great Discounts</p>
                        <p>Renowned brands</p>
                        <p>Quality merch</p>
                    </div>
                </div>

                <div className="footer-box laptop">
                    <h2>Services</h2>

                    <div className="footer-text">
                        <p>9-5 service</p>
                        <p>Home Delivery</p>
                        <p>In store service</p>
                        <p>Online services</p>
                    </div>
                </div>


                <div className="footer-box">
                    <h2 className="laptop">Contact and follow us on</h2>

                    <div className="footer-icons">
                        <div className="footer-text footer-flex-icons">
                            <i className="fa-lg fa-brands fa-instagram" />
                            <i className="fa-lg fa-brands fa-facebook" />
                            <i className="fa-lg fa-brands fa-whatsapp" />
                            <i className="fa-lg fa-solid fa-envelope" />
                        </div>
                    </div>

                    {/* <div className="laptop">
                        <input type="text" />
                        <button>Sign up</button>
                    </div> */}
                </div>

            </div>

        </div>
    );
}

export default Footer;