import { NavLink } from "react-router-dom";
import { useRef, useState } from "react"

const Navbar = ({ toggleTheme }) => {
    const [activeClass, setActiveClass] = useState(false);
    const scrollRef = useRef(null);

    const handleNavClick = () => {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });

        setActiveClass(false);
    };

    const navClick = () => {
        setActiveClass(!activeClass)
    }

    return (
        <div className="navbar" ref={scrollRef}>
            <div className="nav">
                <div className="nav-brand"><h2>Likmat</h2></div>

                <div className="nav-flex-item-2">
                    <div className="nav-items">
                        <div className="icons">
                            <i className=" icon fa-lg fa-solid fa-cart-shopping" />
                            <i style={{color: "#363961"}} className=" icon fa-xl fa-solid fa-comment">
                            </i>
                        </div>

                        <div className={`nav-list ${activeClass && "active"}`}>
                            <div className="navlinks">
                                <h2>Likmat Emporium</h2>
                                <NavLink onClick={handleNavClick} className="nav-link" to="/">Home</NavLink>
                                <NavLink onClick={handleNavClick} className="nav-link" to="/women">Women</NavLink>
                                <NavLink onClick={handleNavClick} className="nav-link" to="/men">Men</NavLink>
                                <NavLink onClick={handleNavClick} className="nav-link" to="/kids">Kids</NavLink>
                                <NavLink onClick={toggleTheme}><i className="fa-solid fa-palette"></i></NavLink>
                                <NavLink onClick={handleNavClick} className="nav-link">Contact us</NavLink>
                            </div>
                        </div>
                    </div>

                    <div onClick={navClick} className={`hamburger ${activeClass && "active"}`} >
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );

}






const PageNav = () => {
    const scrollRef = useRef(null);

    const handleNavClick = () => {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="pagenav" ref={scrollRef}>
            <div className="page-nav-brand"><h2>Likmat</h2></div>

            <div className="page-nav-flex-item-2">

                <div className="pagelinks">
                    <NavLink onClick={handleNavClick} to="/">Home</NavLink>
                    <NavLink onClick={handleNavClick} to="/women">Women</NavLink>
                    <NavLink onClick={handleNavClick} to="/men">Men</NavLink>
                    <NavLink onClick={handleNavClick} to="/kids">Kids</NavLink>
                    <NavLink onClick={handleNavClick} to="/all">Surf</NavLink>
                    <NavLink onClick={handleNavClick} to="/all">Contact Us</NavLink>
                </div>
            </div>
        </div>
    );
}

export { Navbar, PageNav };