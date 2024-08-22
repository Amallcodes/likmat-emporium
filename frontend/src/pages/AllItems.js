import { NavLink } from "react-router-dom";
import Deals from "../components/Home-components/Deals";
import { PageNav } from "../components/Navbar";
import { SurfCard } from "../components/Cards";
import { useRef } from "react";
import useFetch from "../hooks/useFetch"
import Loader from "../components/Loader"

const All = () => {
    const { data: products, isPending, error } = useFetch("https://likmat-demo-backend.onrender.com/api/products");
    const searchRef = useRef(null);

    const searchButtonClicked = () => {
        searchRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="page">
            <PageNav />

            <div className="search">
                <input type="text" placeholder="search items e.g bags" />
                <button onClick={searchButtonClicked}>Search</button>
            </div>

            <div className="page-deals">
                <Deals />
            </div>

            <div className="page-header-box">
                <h2 ref={searchRef}>Our Merch</h2>
            </div>

            {error && <div style={{ textAlign: "center", padding: "30px 50px" }}>
                <p style={{ color: "orangered", fontSize: "1.3rem" }}>{error}</p>
            </div>}

            {isPending && <div style={{ display: "flex", justifyContent: "center", padding: "30px 50px" }}>
                <Loader />
            </div>}

            {products &&
                <div className="surf-section">
                    <div className="surf-section-mobile mobile">
                        <div className="surf-section-flex-one">
                            {products.slice(0, 10).map((product) => (
                                <SurfCard
                                    key={product._id}
                                    image={product.image}
                                    price={product.price}
                                    description={product.description}
                                />
                            ))}
                        </div>

                        <div className="surf-section-flex-two">
                            {products.slice(10, 20).map((product) => (
                                <SurfCard
                                    key={product._id}
                                    image={product.image}
                                    price={product.price}
                                    description={product.description}
                                />
                            ))}

                        </div>
                    </div>

                    <div className="surf-section-laptop laptop">
                        {products.slice(0, 17).map((product) => (
                            <SurfCard
                                key={product._id}
                                image={product.image}
                                price={product.price}
                                description={product.description}
                            />
                        ))}

                        {/* delete for production */}
                        {products.slice(0, 19).map((product) => (
                            <SurfCard
                                key={product._id}
                                image={product.image}
                                price={product.price}
                                description={product.description}
                            />
                        ))}

                    </div>
                </div>
            }

        </div>
    );
}

export default All;